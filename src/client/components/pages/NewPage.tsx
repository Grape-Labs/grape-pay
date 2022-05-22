import { NextPage } from 'next';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { RefreshButton } from '../buttons/RefreshButton';
import { FullscreenButton } from '../buttons/FullscreenButton';
import { GenerateButton } from '../buttons/GenerateButton';
import { TransactionsLink } from '../buttons/TransactionsLink';
import { NumPad } from '../sections/NumPad';
import { PoweredBy } from '../sections/PoweredBy';
import { Summary } from '../sections/Summary';
import css from './NewPage.module.css';

const NewPage: NextPage = () => {
    const phone = useMediaQuery({ query: '(max-width: 767px)' });

    function refreshPage() {
        window.location.reload();
    }

    return phone ? (
        <div className={css.root}>
            <div className={css.top}>
                <FullscreenButton />
                <RefreshButton onClick={refreshPage}>Change Payment Type</RefreshButton>
                <TransactionsLink />
            </div>
            <div className={css.body}>
                <NumPad />
                <GenerateButton />
            </div>
            <PoweredBy />
        </div>
    ) : (
        <div className={css.root}>
            <div className={css.main}>
                <div className={css.top}>
                    <FullscreenButton />
                    <RefreshButton onClick={refreshPage}>Change Payment Type</RefreshButton>
                </div>
                <div className={css.body}>
                    <NumPad />
                </div>
                <PoweredBy />
            </div>
            <div className={css.side}>
                <div className={css.summary}>
                    <Summary />
                    <GenerateButton />
                </div>
                <div className={css.bottom}>
                    <TransactionsLink />
                </div>
            </div>
        </div>
    );
};

export default NewPage;

export function getServerSideProps() {
    // Required so getInitialProps re-runs on the server-side
    // If it runs on client-side then there's no req and the URL reading doesn't work
    // See https://nextjs.org/docs/api-reference/data-fetching/get-initial-props
    return {
        props: {},
    };
}
