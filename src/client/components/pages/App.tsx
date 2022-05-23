import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { SolflareWalletAdapter } from '@solana/wallet-adapter-solflare';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PublicKey } from '@solana/web3.js';
import { AppContext, AppProps as NextAppProps, default as NextApp } from 'next/app';
import { AppInitialProps } from 'next/dist/shared/lib/utils';
import React, { FC, useMemo } from 'react';
import { DEVNET_ENDPOINT } from '../../utils/constants';
import { ConfigProvider } from '../contexts/ConfigProvider';
import { FullscreenProvider } from '../contexts/FullscreenProvider';
import { PaymentProvider } from '../contexts/PaymentProvider';
import { ThemeProvider } from '../contexts/ThemeProvider';
import { TransactionsProvider } from '../contexts/TransactionsProvider';
import { MAINNET_ENDPOINT, MAINNET_USDC_MINT, MAINNET_GRAPE_MINT, MAINNET_PAYMENTS } from '../../utils/constants';
import { SolanaPayLogo } from '../images/SolanaPayLogo';
import { SOLIcon } from '../images/SOLIcon';
import { USDCIcon } from '../images/USDCIcon';
import { GrapeIcon } from '../images/GrapeIcon';
import { FullscreenButton } from '../buttons/FullscreenButton';
import css from './App.module.css';
//import Select, { StylesConfig } from 'react-select'
import cssButton from '../buttons/GenerateButton.module.css';

import { PoweredBy } from '../sections/PoweredBy';

interface AppProps extends NextAppProps {
    host: string;
    query: {
        recipient?: string;
        label?: string;
        message?: string;
    };
}

const App: FC<AppProps> & { getInitialProps(appContext: AppContext): Promise<AppInitialProps> } = ({
    Component,
    host,
    query,
    pageProps,
}) => {
    //const baseURL = `http://${host}`;
    const baseURL = `http://${host}`;
    const [selectedMintLabel, setSelectedMintLabel] = React.useState("");
    const [selectedMintPublicKey, setSelectedMintPublicKey] = React.useState("");
    const [shouldDisplaySelect, setShouldDisplaySelect] = React.useState(true);
    const [selectedToken, setSelectedToken] = React.useState("");
    const [inputRecipient, setInputRecipient] = React.useState(""); 
    const mintOptions = new Array();

    // If you're testing without a mobile wallet, set this to true to allow a browser wallet to be used.
    const connectWallet = false;
    const network = WalletAdapterNetwork.Devnet;
    const wallets = useMemo(
        () => (connectWallet ? [new PhantomWalletAdapter(), new SolflareWalletAdapter({ network })] : []),
        [connectWallet, network]
    );

    // Toggle comments on these lines to use transaction requests instead of transfer requests.
    const link = undefined;
    // const link = useMemo(() => new URL(`${baseURL}/api/`), [baseURL]);

    let recipient: PublicKey | undefined = undefined;
    const { recipient: recipientParam, label, message } = query;
    if (recipientParam && label) {
        try {
            recipient = new PublicKey(recipientParam);
        } catch (error) {
            console.error(error);
        }
    }

    //const withtoken = params.get('token');
        
    for (var supported of MAINNET_PAYMENTS){
        mintOptions.push({
            value:supported.MINT,
            label:supported.LABEL
        })
        
        //if (supported.LABEL === withtoken){
        //    setSelectedMintLabel(supported.LABEL);
        //    setSelectedMintPublicKey(supported.MINT);
        //}
    }

    function fetchAndSetToken(token:string){
        for (var supported of MAINNET_PAYMENTS){
            mintOptions.push({
                value:supported.MINT,
                label:supported.LABEL
            })
            
            if (supported.LABEL === token){
                setSelectedMintLabel(supported.LABEL);
                setSelectedMintPublicKey(supported.MINT);
                setSelectedToken(token)
            }
        }
    }

    function setRecipient(e:any){
        e.preventDefault();
        //let recipient: PublicKey | undefined = undefined;
        //const { recipient: recipientParam, label, message } = query;
        if (recipientParam && label) {
            try {
                recipient = new PublicKey(recipientParam);
            } catch (error) {
                console.error(error);
            }
        }
    }

    return (
        <ThemeProvider>
            
            {/*!recipient ?
                <form onSubmit={setRecipient}>
                    <label>
                    Recipient:
                    <input type="text" name="recipient" value={recipient} onChange={e=>setInputRecipient(this.value)}/>
                    </label>
                    <input type="submit" value="Set" />
                </form>
            :*/}
                <>
                {selectedToken.length <= 0 ? 
                    <p>
                        <FullscreenButton />
                        <h1 style={{textAlign:"center",marginTop:2}}>SELECT SOL / SPL-TOKEN</h1>
                        <button
                            className={cssButton.token_dark}
                            type="button"
                            onClick={e => fetchAndSetToken("SOL")}
                            //disabled={!amount || amount.isLessThanOrEqualTo(0)
                        >SOL</button>
                        <button
                            className={cssButton.token_dark}
                            type="button"
                            onClick={e => fetchAndSetToken("USDC")}
                            //disabled={!amount || amount.isLessThanOrEqualTo(0)
                        >USDC</button>
                        <button
                            className={cssButton.token_dark}
                            type="button"
                            onClick={e => fetchAndSetToken("GRAPE")}
                            //disabled={!amount || amount.isLessThanOrEqualTo(0)
                        >GRAPE</button>
                        <button
                            className={cssButton.token_dark}
                            type="button"
                            onClick={e => fetchAndSetToken("MANGO")}
                            //disabled={!amount || amount.isLessThanOrEqualTo(0)
                        >MANGO</button>
                        <button
                            className={cssButton.token_dark}
                            type="button"
                            onClick={e => fetchAndSetToken("UNQ")}
                            //disabled={!amount || amount.isLessThanOrEqualTo(0)
                        >UNQ</button>

                        
                        <PoweredBy />
                    </p>
                :
                    <FullscreenProvider>
                        {recipient && label ? (
                            <ConnectionProvider endpoint={DEVNET_ENDPOINT}>
                                <WalletProvider wallets={wallets} autoConnect={connectWallet}>
                                    <WalletModalProvider>
                                    <>
                                        {/*
                                        {!shouldDisplaySelect ? null : (
                                            <div
                                                style={{position:"absolute", top:0,right:0,zIndex:999}}
                                            >
                                                <Select 
                                                    //defaultValue={MAINNET_GRAPE_MINT}
                                                    isClearable={true}
                                                    options={mintOptions} 
                                                    
                                                    onChange={(e: any) => {
                                                        handleMintChange(e)
                                                    }} 
                                                    theme={(theme) => ({
                                                        ...theme,
                                                        borderRadius: 0,
                                                        colors: {
                                                        ...theme.colors,
                                                        neutral0: '#222',
                                                        neutral5: 'black',
                                                        neutral10: 'black',
                                                        neutral20: 'black',
                                                        primary25: '#777',
                                                        primary: 'black',
                                                        },
                                                    })}
                                                />
                                            </div>
                                                )}*/}
                                        {selectedMintPublicKey ?
                                        <>
                                            {selectedMintPublicKey === 'So11111111111111111111111111111111111111112' ?
                                                <ConfigProvider
                                                    baseURL={baseURL}
                                                    link={link}
                                                    recipient={recipient}
                                                    label={label}
                                                    message={message}
                                                    symbol="SOL"
                                                    icon={<SOLIcon />}
                                                    decimals={9}
                                                    minDecimals={1}
                                                    connectWallet={connectWallet}
                                                >
                                                    <TransactionsProvider>
                                                        <PaymentProvider>
                                                            <Component {...pageProps} />
                                                        </PaymentProvider>
                                                    </TransactionsProvider>
                                                </ConfigProvider>
                                            :
                                                <ConfigProvider
                                                    baseURL={baseURL}
                                                    link={link}
                                                    recipient={recipient}
                                                    label={label}
                                                    message={message}
                                                    splToken={new PublicKey(selectedMintPublicKey)}
                                                    symbol={selectedMintLabel}
                                                    icon={<GrapeIcon />}
                                                    decimals={6}
                                                    minDecimals={2}
                                                    connectWallet={connectWallet}
                                                >
                                                    <TransactionsProvider>
                                                        <PaymentProvider>
                                                            <Component {...pageProps} />
                                                        </PaymentProvider>
                                                    </TransactionsProvider>
                                                </ConfigProvider>
                                            }
                                        </>
                                            :
                                        <>
                                            <ConfigProvider
                                                baseURL={baseURL}
                                                link={link}
                                                recipient={recipient}
                                                label={label}
                                                message="{message}"
                                                splToken={MAINNET_GRAPE_MINT}
                                                symbol="GRAPE"
                                                icon={<GrapeIcon />}
                                                decimals={6}
                                                minDecimals={2}
                                                connectWallet={connectWallet}
                                            >
                                                    <TransactionsProvider>
                                                    <PaymentProvider>
                                                        <Component {...pageProps} />
                                                    </PaymentProvider>
                                                </TransactionsProvider>
                                            </ConfigProvider>
                                        </>
                                        }
                                    </>
                                    </WalletModalProvider>
                                </WalletProvider>
                            </ConnectionProvider>
                        ) : (
                            <div className={css.logo}>
                                <SolanaPayLogo width={240} height={88} />
                            </div>
                        )}
                    </FullscreenProvider>
                }
                </>
            
                
        </ThemeProvider>
    );
};

App.getInitialProps = async (appContext) => {
    const props = await NextApp.getInitialProps(appContext);

    const { query, req } = appContext.ctx;
    const recipient = query.recipient as string;
    const label = query.label as string;
    const message = query.message || undefined;
    const host = req?.headers.host || 'localhost:3001';

    return {
        ...props,
        query: { recipient, label, message },
        host,
    };
};

export default App;
