(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5936:
/***/ ((module) => {

// Exports
module.exports = {
	"token_dark": "GenerateButton_token_dark__yX5F_",
	"root": "GenerateButton_root__hLERD"
};


/***/ }),

/***/ 8715:
/***/ ((module) => {

// Exports
module.exports = {
	"logo": "App_logo__RLYTZ"
};


/***/ }),

/***/ 3751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ ConfigProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4022);



const ConfigProvider = ({ children , baseURL , link , recipient , label , message , splToken , icon , symbol , decimals , minDecimals =0 , requiredConfirmations =1 , connectWallet =false ,  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hooks_useConfig__WEBPACK_IMPORTED_MODULE_2__/* .ConfigContext.Provider */ .E.Provider, {
        value: {
            baseURL,
            link,
            recipient,
            label,
            message,
            splToken,
            symbol,
            icon,
            decimals,
            minDecimals,
            requiredConfirmations,
            connectWallet
        },
        children: children
    });
};


/***/ }),

/***/ 7674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ FullscreenProvider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/client/hooks/useFullscreen.ts
var useFullscreen = __webpack_require__(7570);
;// CONCATENATED MODULE: ./src/client/utils/fullscreen.ts
function isFullscreen() {
    return typeof document !== "undefined" && !!(document.fullscreenElement || document.webkitCurrentFullScreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen);
}
function exitFullscreen() {
    const exitFullscreen1 = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen;
    if (exitFullscreen1) {
        exitFullscreen1.call(document).catch((error)=>console.warn(error)
        );
    }
}
function requestFullscreen() {
    const requestFullscreen1 = document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullscreen || document.documentElement.mozRequestFullScreen || document.documentElement.msRequestFullscreen;
    if (requestFullscreen1) {
        requestFullscreen1.call(document.documentElement).catch((error)=>console.warn(error)
        );
    }
}
function toggleFullscreen() {
    if (isFullscreen()) {
        exitFullscreen();
    } else {
        requestFullscreen();
    }
}

;// CONCATENATED MODULE: ./src/client/components/contexts/FullscreenProvider.tsx




const FullscreenProvider = ({ children  })=>{
    const { 0: fullscreen , 1: setFullscreen  } = (0,external_react_.useState)(isFullscreen());
    (0,external_react_.useEffect)(()=>setFullscreen(isFullscreen())
    , []);
    (0,external_react_.useEffect)(()=>{
        const listener = ()=>setFullscreen(isFullscreen())
        ;
        document.addEventListener("fullscreenchange", listener);
        document.addEventListener("webkitfullscreenchange", listener);
        return ()=>{
            document.removeEventListener("fullscreenchange", listener);
            document.removeEventListener("webkitfullscreenchange", listener);
        };
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (fullscreen) {
            document.documentElement.classList.add("fullscreen");
            return ()=>document.documentElement.classList.remove("fullscreen")
            ;
        }
    }, [
        fullscreen
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(useFullscreen/* FullscreenContext.Provider */.s.Provider, {
        value: {
            fullscreen,
            toggleFullscreen: toggleFullscreen
        },
        children: children
    });
};


/***/ }),

/***/ 3616:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ PaymentProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_pay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3932);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1247);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4022);
/* harmony import */ var _hooks_useNavigateWithQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6735);
/* harmony import */ var _hooks_usePayment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2347);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_pay__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__]);
([_solana_pay__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const PaymentProvider = ({ children  })=>{
    const { connection  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useConnection)();
    const { link: link1 , recipient: recipient1 , splToken: splToken1 , label , message , requiredConfirmations , connectWallet  } = (0,_hooks_useConfig__WEBPACK_IMPORTED_MODULE_5__/* .useConfig */ .Z)();
    const { publicKey , sendTransaction  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet)();
    const { 0: amount1 , 1: setAmount  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const { 0: memo1 , 1: setMemo  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const { 0: reference1 , 1: setReference  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const { 0: signature1 , 1: setSignature  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const { 0: status1 , 1: setStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(_hooks_usePayment__WEBPACK_IMPORTED_MODULE_7__/* .PaymentStatus.New */ .bG.New);
    const { 0: confirmations1 , 1: setConfirmations  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
    const navigate = (0,_hooks_useNavigateWithQuery__WEBPACK_IMPORTED_MODULE_6__/* .useNavigateWithQuery */ .l)();
    const progress = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>confirmations1 / requiredConfirmations
    , [
        confirmations1,
        requiredConfirmations
    ]);
    const url1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
        if (link1) {
            const url = new URL(String(link1));
            url.searchParams.append("recipient", recipient1.toBase58());
            if (amount1) {
                url.searchParams.append("amount", amount1.toFixed(amount1.decimalPlaces()));
            }
            if (splToken1) {
                url.searchParams.append("spl-token", splToken1.toBase58());
            }
            if (reference1) {
                url.searchParams.append("reference", reference1.toBase58());
            }
            if (memo1) {
                url.searchParams.append("memo", memo1);
            }
            if (label) {
                url.searchParams.append("label", label);
            }
            if (message) {
                url.searchParams.append("message", message);
            }
            return (0,_solana_pay__WEBPACK_IMPORTED_MODULE_1__.encodeURL)({
                link: url
            });
        } else {
            return (0,_solana_pay__WEBPACK_IMPORTED_MODULE_1__.encodeURL)({
                recipient: recipient1,
                amount: amount1,
                splToken: splToken1,
                reference: reference1,
                label,
                message,
                memo: memo1
            });
        }
    }, [
        link1,
        recipient1,
        amount1,
        splToken1,
        reference1,
        label,
        message,
        memo1
    ]);
    const reset = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        setAmount(undefined);
        setMemo(undefined);
        setReference(undefined);
        setSignature(undefined);
        setStatus(_hooks_usePayment__WEBPACK_IMPORTED_MODULE_7__/* .PaymentStatus.New */ .bG.New);
        setConfirmations(0);
        navigate("/new", true);
    }, [
        navigate
    ]);
    const generate = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        if (status1 === _hooks_usePayment__WEBPACK_IMPORTED_MODULE_7__/* .PaymentStatus.New */ .bG.New && !reference1) {
            setReference(_solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.Keypair.generate().publicKey);
            setStatus(_hooks_usePayment__WEBPACK_IMPORTED_MODULE_7__/* .PaymentStatus.Pending */ .bG.Pending);
            navigate("/pending");
        }
    }, [
        status1,
        reference1,
        navigate
    ]);
    // If there's a connected wallet, use it to sign and send the transaction
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (status1 === _hooks_usePayment__WEBPACK_IMPORTED_MODULE_7__/* .PaymentStatus.Pending */ .bG.Pending && connectWallet && publicKey) {
            let changed = false;
            const run = async ()=>{
                try {
                    const request = (0,_solana_pay__WEBPACK_IMPORTED_MODULE_1__.parseURL)(url1);
                    let transaction;
                    if ("link" in request) {
                        const { link  } = request;
                        transaction = await (0,_solana_pay__WEBPACK_IMPORTED_MODULE_1__.fetchTransaction)(connection, publicKey, link);
                    } else {
                        const { recipient , amount , splToken , reference , memo  } = request;
                        if (!amount) return;
                        transaction = await (0,_solana_pay__WEBPACK_IMPORTED_MODULE_1__.createTransfer)(connection, publicKey, {
                            recipient,
                            amount,
                            splToken,
                            reference,
                            memo
                        });
                    }
                    if (!changed) {
                        await sendTransaction(transaction, connection);
                    }
                } catch (error) {
                    // If the transaction is declined or fails, try again
                    console.error(error);
                    timeout = setTimeout(run, 5000);
                }
            };
            let timeout = setTimeout(run, 0);
            return ()=>{
                changed = true;
                clearTimeout(timeout);
            };
        }
    }, [
        status1,
        connectWallet,
        publicKey,
        url1,
        connection,
        sendTransaction
    ]);
    // When the status is pending, poll for the transaction using the reference key
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (!(status1 === _hooks_usePayment__WEBPACK_IMPORTED_MODULE_7__/* .PaymentStatus.Pending */ .bG.Pending && reference1 && !signature1)) return;
        let changed = false;
        const interval = setInterval(async ()=>{
            let signature;
            try {
                signature = await (0,_solana_pay__WEBPACK_IMPORTED_MODULE_1__.findReference)(connection, reference1);
                if (!changed) {
                    clearInterval(interval);
                    setSignature(signature.signature);
                    setStatus(_hooks_usePayment__WEBPACK_IMPORTED_MODULE_7__/* .PaymentStatus.Confirmed */ .bG.Confirmed);
                    navigate("/confirmed", true);
                }
            } catch (error) {
                // If the RPC node doesn't have the transaction signature yet, try again
                if (!(error instanceof _solana_pay__WEBPACK_IMPORTED_MODULE_1__.FindReferenceError)) {
                    console.error(error);
                }
            }
        }, 250);
        return ()=>{
            changed = true;
            clearInterval(interval);
        };
    }, [
        status1,
        reference1,
        signature1,
        connection,
        navigate
    ]);
    // When the status is confirmed, validate the transaction against the provided params
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (!(status1 === _hooks_usePayment__WEBPACK_IMPORTED_MODULE_7__/* .PaymentStatus.Confirmed */ .bG.Confirmed && signature1 && amount1)) return;
        let changed = false;
        const run = async ()=>{
            try {
                await (0,_solana_pay__WEBPACK_IMPORTED_MODULE_1__.validateTransfer)(connection, signature1, {
                    recipient: recipient1,
                    amount: amount1,
                    splToken: splToken1,
                    reference: reference1
                });
                if (!changed) {
                    setStatus(_hooks_usePayment__WEBPACK_IMPORTED_MODULE_7__/* .PaymentStatus.Valid */ .bG.Valid);
                }
            } catch (error) {
                // If the RPC node doesn't have the transaction yet, try again
                if (error instanceof _solana_pay__WEBPACK_IMPORTED_MODULE_1__.ValidateTransferError && (error.message === "not found" || error.message === "missing meta")) {
                    console.warn(error);
                    timeout = setTimeout(run, 250);
                    return;
                }
                console.error(error);
                setStatus(_hooks_usePayment__WEBPACK_IMPORTED_MODULE_7__/* .PaymentStatus.Invalid */ .bG.Invalid);
            }
        };
        let timeout = setTimeout(run, 0);
        return ()=>{
            changed = true;
            clearTimeout(timeout);
        };
    }, [
        status1,
        signature1,
        amount1,
        connection,
        recipient1,
        splToken1,
        reference1
    ]);
    // When the status is valid, poll for confirmations until the transaction is finalized
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (!(status1 === _hooks_usePayment__WEBPACK_IMPORTED_MODULE_7__/* .PaymentStatus.Valid */ .bG.Valid && signature1)) return;
        let changed = false;
        const interval = setInterval(async ()=>{
            try {
                const response = await connection.getSignatureStatus(signature1);
                const status = response.value;
                if (!status) return;
                if (status.err) throw status.err;
                if (!changed) {
                    const confirmations = status.confirmations || 0;
                    setConfirmations(confirmations);
                    if (confirmations >= requiredConfirmations || status.confirmationStatus === "finalized") {
                        clearInterval(interval);
                        setStatus(_hooks_usePayment__WEBPACK_IMPORTED_MODULE_7__/* .PaymentStatus.Finalized */ .bG.Finalized);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }, 250);
        return ()=>{
            changed = true;
            clearInterval(interval);
        };
    }, [
        status1,
        signature1,
        connection,
        requiredConfirmations
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hooks_usePayment__WEBPACK_IMPORTED_MODULE_7__/* .PaymentContext.Provider */ .Lq.Provider, {
        value: {
            amount: amount1,
            setAmount,
            memo: memo1,
            setMemo,
            reference: reference1,
            signature: signature1,
            status: status1,
            confirmations: confirmations1,
            progress,
            url: url1,
            reset,
            generate
        },
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* binding */ ThemeProvider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/client/hooks/useTheme.ts

const ThemeContext = (0,external_react_.createContext)({});
function useTheme() {
    return useContext(ThemeContext);
}

;// CONCATENATED MODULE: ./src/client/components/contexts/ThemeProvider.tsx



const ThemeProvider = ({ children  })=>{
    const query = "(prefers-color-scheme: light)";
    const { 0: theme , 1: setTheme  } = (0,external_react_.useState)(()=> false ? 0 : "dark"
    );
    (0,external_react_.useEffect)(()=>{
        if (window.matchMedia) {
            const listener = (event)=>setTheme(event.matches ? "light" : "dark")
            ;
            window.matchMedia(query).addEventListener("change", listener);
            return ()=>window.matchMedia(query).removeEventListener("change", listener)
            ;
        }
    }, []);
    (0,external_react_.useEffect)(()=>{
        document.documentElement.classList.add(theme);
        document.documentElement.style.visibility = "visible";
        return ()=>document.documentElement.classList.remove(theme)
        ;
    }, [
        theme
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(ThemeContext.Provider, {
        value: {
            theme,
            setTheme
        },
        children: children
    });
};


/***/ }),

/***/ 9859:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ TransactionsProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1057);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1247);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4022);
/* harmony import */ var _hooks_useTransactions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(620);
/* harmony import */ var _utils_arraysEqual__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(113);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2472);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__]);
([_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const TransactionsProvider = ({ children , pollInterval  })=>{
    pollInterval ||= 10000;
    const { connection  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useConnection)();
    const { recipient , splToken  } = (0,_hooks_useConfig__WEBPACK_IMPORTED_MODULE_6__/* .useConfig */ .Z)();
    const { 0: associatedToken1 , 1: setAssociatedToken  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
    const { 0: signatures , 1: setSignatures  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    const { 0: transactions , 1: setTransactions  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const getTokenAddress = // Get the ATA for the recipient and token
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (!splToken) {
            return;
        }
        let changed = false;
        (async ()=>{
            const associatedToken = await (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__.getAssociatedTokenAddress)(splToken, recipient);
            //const associatedToken = null
            if (changed) return;
            setAssociatedToken(associatedToken);
        })();
        return ()=>{
            changed = true;
            setAssociatedToken(undefined);
        };
    }, [
        splToken,
        recipient
    ]);
    // Poll for signatures referencing the associated token account
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        let changed = false;
        const run = async ()=>{
            try {
                setLoading(true);
                const confirmedSignatureInfos = await connection.getSignaturesForAddress(associatedToken1 || recipient, {
                    limit: 10
                }, "confirmed");
                if (changed) return;
                setSignatures((prevSignatures)=>{
                    const nextSignatures = confirmedSignatureInfos.map(({ signature  })=>signature
                    );
                    return (0,_utils_arraysEqual__WEBPACK_IMPORTED_MODULE_9__/* .arraysEqual */ .c)(prevSignatures, nextSignatures) ? prevSignatures : nextSignatures;
                });
            } catch (error) {
                console.error(error);
            } finally{
                setLoading(false);
            }
        };
        const interval = setInterval(run, 5000);
        void run();
        return ()=>{
            changed = true;
            clearInterval(interval);
            setSignatures([]);
        };
    }, [
        connection,
        associatedToken1,
        recipient
    ]);
    // When the signatures change, poll and update the transactions
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (!signatures.length) return;
        let changed = false;
        const run = async ()=>{
            let parsedTransactions, signatureStatuses;
            try {
                setLoading(true);
                [parsedTransactions, signatureStatuses] = await Promise.all([
                    connection.getParsedTransactions(signatures),
                    connection.getSignatureStatuses(signatures, {
                        searchTransactionHistory: true
                    }), 
                ]);
            } catch (error1) {
                if (changed) return;
                console.error(error1);
                return;
            } finally{
                setLoading(false);
            }
            if (changed) return;
            setTransactions(signatures.map((signature, signatureIndex)=>{
                const parsedTransaction = parsedTransactions[signatureIndex];
                const signatureStatus = signatureStatuses.value[signatureIndex];
                if (!parsedTransaction?.meta || !signatureStatus) return;
                const timestamp = parsedTransaction.blockTime;
                const error = parsedTransaction.meta.err;
                const status = signatureStatus.confirmationStatus;
                if (!timestamp || !status) return;
                if (parsedTransaction.transaction.message.instructions.length !== 1) return;
                const instruction = parsedTransaction.transaction.message.instructions[0];
                if (!("program" in instruction)) return;
                const program = instruction.program;
                const type = instruction.parsed?.type;
                const info = instruction.parsed.info;
                let preAmount, postAmount;
                if (!associatedToken1) {
                    // Include only SystemProgram.transfer instructions
                    if (!(program === "system" && type === "transfer")) return;
                    // Include only transfers to the recipient
                    if (info?.destination !== recipient.toBase58()) return;
                    // Exclude self-transfers
                    if (info.source === recipient.toBase58()) return;
                    const accountIndex = parsedTransaction.transaction.message.accountKeys.findIndex(({ pubkey  })=>pubkey.equals(recipient)
                    );
                    if (accountIndex === -1) return;
                    const preBalance = parsedTransaction.meta.preBalances[accountIndex];
                    const postBalance = parsedTransaction.meta.postBalances[accountIndex];
                    preAmount = new (bignumber_js__WEBPACK_IMPORTED_MODULE_4___default())(preBalance).div(_solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.LAMPORTS_PER_SOL);
                    postAmount = new (bignumber_js__WEBPACK_IMPORTED_MODULE_4___default())(postBalance).div(_solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.LAMPORTS_PER_SOL);
                } else {
                    // Include only TokenProgram.transfer / TokenProgram.transferChecked instructions
                    if (!(program === "spl-token" && (type === "transfer" || type === "transferChecked"))) return;
                    // Include only transfers to the recipient ATA
                    if (info?.destination !== associatedToken1.toBase58()) return;
                    // Exclude self-transfers
                    if (info.source === associatedToken1.toBase58()) return;
                    const accountIndex = parsedTransaction.transaction.message.accountKeys.findIndex(({ pubkey  })=>pubkey.equals(associatedToken1)
                    );
                    if (accountIndex === -1) return;
                    const preBalance = parsedTransaction.meta.preTokenBalances?.find((x)=>x.accountIndex === accountIndex
                    );
                    if (!preBalance?.uiTokenAmount.uiAmountString) return;
                    const postBalance = parsedTransaction.meta.postTokenBalances?.find((x)=>x.accountIndex === accountIndex
                    );
                    if (!postBalance?.uiTokenAmount.uiAmountString) return;
                    preAmount = new (bignumber_js__WEBPACK_IMPORTED_MODULE_4___default())(preBalance.uiTokenAmount.uiAmountString);
                    postAmount = new (bignumber_js__WEBPACK_IMPORTED_MODULE_4___default())(postBalance.uiTokenAmount.uiAmountString);
                }
                // Exclude negative amounts
                if (postAmount.lt(preAmount)) return;
                const amount = postAmount.minus(preAmount).toString();
                const confirmations = status === "finalized" ? _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .MAX_CONFIRMATIONS */ .Xc : signatureStatus.confirmations || 0;
                return {
                    signature,
                    amount,
                    timestamp,
                    error,
                    status,
                    confirmations
                };
            }).filter((transaction)=>!!transaction
            ));
        };
        const interval = setInterval(run, pollInterval);
        void run();
        return ()=>{
            changed = true;
            clearInterval(interval);
        };
    }, [
        signatures,
        connection,
        associatedToken1,
        recipient,
        pollInterval
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hooks_useTransactions__WEBPACK_IMPORTED_MODULE_7__/* .TransactionsContext.Provider */ ._.Provider, {
        value: {
            transactions,
            loading
        },
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ GrapeIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const GrapeIcon = ({ width =32 , height =32  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: width,
        height: height,
        fill: "none",
        viewBox: "0 0 32 32",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M9.01656587,22 C7.35962231,22 6.01590977,20.6620342 6.01414706,19.0104197 C6.014381,18.6854574 6.0683383,18.3627546 6.17385019,18.0552822 C4.65355783,17.7078956 3.66088018,16.2486823 3.89967765,14.712301 C3.92491623,14.5431035 3.96663621,14.3767602 4.02424609,14.2156295 C3.4237021,14.0728659 2.88175433,13.7494098 2.47193169,13.2891462 C1.72849601,12.4624125 1.51596312,11.2886187 1.92255293,10.2549928 C0.574618257,9.74031484 -0.212717429,8.33995457 0.0504549418,6.92526737 C0.313627312,5.51058017 1.55231363,4.48469804 2.99575795,4.48596237 C3.70977051,4.48440525 4.40081639,4.73735035 4.94413611,5.19913169 C5.03896245,5.11514097 5.13926233,5.03749899 5.24437799,4.96671491 L5.36894643,4.89985528 L5.42643955,4.86801737 C5.5328774,4.80668234 5.64271625,4.75140804 5.755428,4.7024602 L5.89916081,4.65470333 L5.96304206,4.63560058 C6.07846122,4.5978584 6.19572768,4.56597948 6.31438894,4.54008683 L6.45173363,4.54008683 L6.51242082,4.54008683 C6.63409636,4.52251081 6.75680077,4.51293873 6.87973802,4.51143271 C6.93403708,4.51143271 6.97555989,4.51143271 7.02027677,4.51143271 L7.08096396,4.51143271 C7.2084816,4.51824383 7.33543563,4.53313157 7.4610574,4.55600579 C7.50980885,4.56536124 7.55783865,4.578128 7.60479022,4.59421129 L7.67186553,4.61331404 C7.78701504,4.64184071 7.90012381,4.67800422 8.01043616,4.72156295 C8.08070554,4.75021708 8.14458679,4.78523878 8.2116621,4.82026049 L8.27554336,4.8552822 L8.34900679,4.8934877 C8.40018906,4.9144998 8.44936418,4.94007388 8.49593367,4.9698987 C8.57259117,5.02402315 8.62369617,5.06541245 8.67160711,5.10361795 C8.35220086,3.6040521 7.7517171,1.62054993 6.04928175,1.07930535 C5.69874518,0.95068507 5.33014791,0.877632393 4.95691236,0.862807525 C4.0913214,0.862807525 3.21614826,1.35629522 1.73090917,2.67756874 C1.60080541,2.7887062 1.4167449,2.81179054 1.26307634,2.73624297 C1.10940777,2.66069541 1.01574927,2.501077 1.02502135,2.33053546 C1.0291406,2.21770958 1.08003178,2.11164293 1.1655601,2.03762663 C2.81050232,0.569898698 3.87412515,0 4.95371829,0 C5.42529916,0.0101105104 5.89178986,0.0994489882 6.33355332,0.264254703 C7.32371271,0.601736614 7.97849554,1.12387844 8.65244274,2.34327062 C9.08779739,2.41141279 9.52771094,2.44653527 9.96839651,2.44833575 C13.057055,2.44833575 13.9513925,0.538060781 13.9865272,0.461649783 C14.0566749,0.308273678 14.2102907,0.209927141 14.3793969,0.210130246 C14.439031,0.209865925 14.4979671,0.222920722 14.5518763,0.248335745 C14.6560393,0.293055164 14.7379381,0.377435376 14.7793339,0.48268504 C14.8207296,0.587934704 14.818185,0.705314118 14.7722666,0.808683068 C14.7275497,0.910564399 13.6287922,3.30795948 9.98117276,3.30795948 C9.66619319,3.30562385 9.35160204,3.2854272 9.03892431,3.24746744 C9.21808608,3.74708278 9.36530791,4.25751208 9.47970494,4.77568741 C9.88059439,4.59234413 10.3162601,4.49680589 10.75733,4.49551375 C11.3243112,4.49761987 11.8787106,4.6622996 12.3543612,4.9698987 C12.4592934,5.03719347 12.5586292,5.11278662 12.6514091,5.1959479 C13.7179784,4.28262725 15.2782426,4.23152348 16.4026614,5.0730821 C17.5270802,5.91464071 17.9130852,7.42240785 17.3307107,8.69811867 C17.1172335,9.18183803 16.7775078,9.59963239 16.3469394,9.90795948 C16.6475777,10.4422013 16.7747835,11.0561645 16.7110626,11.6654124 C16.5482745,13.0729395 15.4233048,14.1770605 14.0088856,14.3175109 C14.0783161,14.5238349 14.1233379,14.7375349 14.1430363,14.9542692 C14.1983201,15.7406538 13.9387581,16.5168358 13.4211781,17.1128799 C13.011662,17.5917696 12.4584577,17.9266434 11.8433112,18.0680174 C11.9511271,18.3749955 12.0061994,18.6979085 12.0062084,19.0231548 C11.9957344,20.6641175 10.6628326,21.9913138 9.01656587,22 Z M9.01656587,16.8740955 C8.23171201,16.8438771 7.49314811,17.2440165 7.09170769,17.9169457 C6.69026727,18.589875 6.69026727,19.4277805 7.09170769,20.1007098 C7.49314811,20.7736391 8.23171201,21.1737785 9.01656587,21.1435601 L9.10599962,21.1435601 C10.2609266,21.0820791 11.1585961,20.1182818 11.1344522,18.9656793 C11.1103083,17.8130768 10.1730609,16.8874693 9.01656587,16.8740955 L9.01656587,16.8740955 Z M6.85737958,13.0280753 C6.05016188,13.0307334 5.31291109,13.4852636 4.95002299,14.2039995 C4.58713489,14.9227355 4.66017012,15.7837503 5.13897392,16.4315485 C5.48253616,16.8938982 5.99820802,17.1990938 6.56991395,17.278437 C6.99079272,16.6921752 7.60828846,16.2754353 8.31067804,16.1036179 C8.22868139,15.8733861 8.17609802,15.633778 8.15416898,15.3904486 C8.10820215,14.8342868 8.21881781,14.2763714 8.47357523,13.7794501 C8.07018694,13.3065158 7.48012934,13.032196 6.85737958,13.0280753 Z M9.19543337,16.0303907 C10.0990762,16.0839079 10.9301277,16.5413885 11.4568297,17.2752533 C12.5753211,17.1251594 13.3846319,16.1350614 13.3061432,15.0128326 C13.2276545,13.8906038 12.2883473,13.022019 11.1597818,13.0280438 L10.9936906,13.0280438 C10.2984222,13.0788458 9.67153958,13.4640023 9.31361654,14.0603123 C8.9556935,14.6566223 8.91159606,15.3893377 9.19543337,16.0240232 L9.19543337,16.0303907 Z M13.7405844,13.4547033 C14.8780822,13.4527628 15.8159137,12.565379 15.877036,11.4331754 C15.9381583,10.3009717 15.1012771,9.3183948 13.9705569,9.19479016 C13.8918421,9.19003787 13.812911,9.19003787 13.7341963,9.19479016 C12.9945106,9.1954234 12.3075972,9.57676471 11.9176114,10.2032707 C11.5276256,10.8297767 11.4898678,11.6126082 11.8177587,12.2735166 C12.5405612,12.4358198 13.1776329,12.8587906 13.6064338,13.4610709 L13.7405844,13.4547033 Z M4.72374579,9.17884454 C4.20148452,9.17924802 3.69727793,9.3694154 3.30558201,9.71374819 C2.87716278,10.0884383 2.61611408,10.6177935 2.58015112,11.1847786 C2.54418815,11.7517638 2.73627321,12.309676 3.11393826,12.7351664 C3.43971725,13.1036746 3.88309651,13.3488295 4.36920485,13.429233 L4.4330861,13.429233 C4.60949986,13.1734096 4.82505364,12.9467316 5.07189861,12.757453 C5.37302433,12.5381021 5.7134479,12.3781636 6.07483425,12.2862518 C6.02685202,12.155471 5.988423,12.0214019 5.959848,11.8850941 C5.81421654,11.184587 5.92766234,10.4552146 6.27925426,9.83154848 C5.87169659,9.41171294 5.30983083,9.17595915 4.72374579,9.17884454 L4.72374579,9.17884454 Z M6.95958958,12.1875543 C7.72850039,12.2144165 8.4573458,12.536039 8.99420743,13.0853835 C9.49089257,12.5739091 10.154849,12.2565511 10.8659281,12.1907381 C10.6934499,11.6251251 10.6934499,11.0211846 10.8659281,10.4555716 C10.7054989,10.0520038 10.4230819,9.70818462 10.0578303,9.47178003 C9.06331223,8.83528333 7.73970584,9.11993277 7.09693427,10.1085384 C6.6832694,10.7311114 6.63573858,11.5268185 6.97236583,12.1939219 L6.95958958,12.1875543 Z M8.9111618,8.27785818 C9.47758191,8.27752686 10.0320808,8.4400253 10.5081931,8.74587554 C10.832384,8.95675707 11.1105046,9.23073462 11.3258731,9.55137482 C11.5046094,9.30756863 11.7200929,9.09277807 11.9646856,8.9146165 C11.8986018,8.80055244 11.8419848,8.6812936 11.7954003,8.55803184 C11.4402148,7.65636899 11.5499602,6.63854258 12.0892541,5.83270622 C12.0284575,5.77863236 11.9632907,5.72964822 11.8944162,5.68625181 C11.5499331,5.46119295 11.1468536,5.3416541 10.7349715,5.34237857 C10.0888731,5.3393669 9.47598473,5.62745989 9.0673192,6.12629538 C8.65865367,6.62513086 8.49796299,7.28130319 8.6300843,7.91172214 C8.66091664,8.03795321 8.70480374,8.16065534 8.76104086,8.27785818 L8.9111618,8.27785818 Z M2.99895201,5.33921852 C2.13350184,5.33989161 1.35365398,5.86009369 1.02297389,6.65730629 C0.69229379,7.4545189 0.875886268,8.37178556 1.48816042,8.98147612 C1.72949325,9.21958505 2.02391031,9.39741279 2.34736325,9.50043415 C2.46335995,9.34425557 2.59499407,9.20024368 2.74023294,9.07062229 C3.10844546,8.75890306 3.54675058,8.54045521 4.01785796,8.43386397 C3.9832349,8.33588154 3.95443836,8.2359493 3.93161827,8.13458755 L3.93161827,8.07727931 C3.89459608,7.90128014 3.87427739,7.72219782 3.87093109,7.54240232 C3.86246147,7.16185724 3.92864665,6.78332735 4.0657689,6.42807525 C4.0657689,6.39942113 4.08812734,6.370767 4.10090359,6.34211288 C4.16114472,6.20556893 4.22940295,6.07268078 4.30532359,5.94413893 C4.31851769,5.9156609 4.33345134,5.88801616 4.35004047,5.86136035 L4.35004047,5.8422576 C3.97109966,5.52471787 3.49394423,5.34706272 2.99895201,5.33921852 L2.99895201,5.33921852 Z M13.7405844,8.32879884 C13.8473438,8.3286875 13.9540106,8.33506693 14.0599907,8.34790159 C14.7362371,8.42120368 15.3671869,8.72218725 15.8486657,9.20115774 C16.6445011,8.63099229 16.9509333,7.59535695 16.5928823,6.68596237 C16.2784485,5.87998024 15.5081686,5.34193 14.6408215,5.32242346 C13.7734745,5.30291691 12.979633,5.80579021 12.6290506,6.59681621 C12.3989609,7.11471517 12.3863092,7.70284721 12.5939159,8.2301013 C12.628905,8.32212907 12.6705367,8.41150919 12.7184844,8.4975398 C13.0466542,8.38211147 13.3926035,8.32499787 13.7405844,8.32879884 L13.7405844,8.32879884 Z M4.90900142,8.32879884 C5.60879418,8.37101575 6.2713813,8.6572887 6.78072208,9.13748191 C7.09942652,8.82539619 7.48333645,8.5873112 7.9050321,8.44023155 C7.86365578,8.32221389 7.82847344,8.20212845 7.79962803,8.0804631 C7.63211174,7.30599095 7.7815741,6.49690552 8.21485617,5.83270622 L8.21485617,5.81678726 C7.82963121,5.50130197 7.34636748,5.32910199 6.84779739,5.3296599 C6.29830626,5.32822893 5.76996856,5.54071225 5.37533455,5.92185239 C4.72015515,6.54785756 4.53316477,7.51810213 4.90900142,8.34153401 L4.90900142,8.32879884 Z",
            id: "Shape"
        })
    });
};


/***/ }),

/***/ 3961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ SOLIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const SOLIcon = ({ width =32 , height =32  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: width,
        height: height,
        fill: "none",
        viewBox: "0 0 84 84",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                id: "a",
                gradientUnits: "userSpaceOnUse",
                x1: "22.0518",
                x2: "61.5149",
                y1: "64.0248",
                y2: "19.6111",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                        offset: ".08",
                        stopColor: "#9945ff"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                        offset: ".3",
                        stopColor: "#8752f3"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                        offset: ".5",
                        stopColor: "#5497d5"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                        offset: ".6",
                        stopColor: "#43b4ca"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                        offset: ".72",
                        stopColor: "#28e0b9"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                        offset: ".97",
                        stopColor: "#19fb9b"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "42",
                cy: "42",
                fill: "#000",
                r: "42"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "m65.7527 53.9024-7.9237 8.512c-.1723.1849-.3807.3323-.6123.4331-.2316.1007-.4814.1526-.7339.1525h-37.5629c-.1792 0-.3546-.0525-.5044-.1509-.1499-.0984-.2678-.2386-.3393-.4033-.0714-.1646-.0933-.3466-.0629-.5235s.1118-.3411.234-.4723l7.9299-8.512c.1717-.1844.3795-.3315.6103-.4323.2309-.1007.4799-.1529.7317-.1533h37.5609c.1792 0 .3546.0524.5044.1509.1499.0984.2678.2386.3393.4032.0714.1647.0933.3466.0629.5236-.0304.1769-.1118.3411-.234.4723zm-7.9237-17.1406c-.1723-.1849-.3807-.3323-.6123-.4331-.2316-.1007-.4814-.1526-.7339-.1525h-37.5629c-.1792 0-.3546.0524-.5044.1509-.1499.0984-.2678.2386-.3393.4032-.0714.1647-.0933.3467-.0629.5236s.1118.3411.234.4723l7.9299 8.512c.1717.1844.3795.3315.6103.4323.2309.1007.4799.1529.7317.1533h37.5609c.1792 0 .3546-.0524.5044-.1509.1499-.0984.2678-.2386.3393-.4032.0714-.1647.0933-.3467.0629-.5236s-.1118-.3411-.234-.4723zm-38.9091-6.1142h37.5629c.2525.0002.5023-.0518.7339-.1525.2316-.1008.44-.2482.6123-.4331l7.9237-8.512c.1222-.1312.2036-.2954.234-.4723s.0085-.3589-.0629-.5235c-.0715-.1647-.1894-.3049-.3393-.4033-.1498-.0984-.3252-.1509-.5044-.1509h-37.5609c-.2518.0004-.5008.0526-.7317.1534-.2308.1007-.4386.2478-.6103.4322l-7.9278 8.512c-.1222.1311-.2035.2951-.2339.4718-.0305.1768-.0088.3586.0624.5231.0712.1646.1888.3048.3383.4034.1496.0986.3246.1513.5037.1517z",
                fill: "url(#a)"
            })
        ]
    });
};


/***/ }),

/***/ 6322:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3364);
/* harmony import */ var _solana_wallet_adapter_phantom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1985);
/* harmony import */ var _solana_wallet_adapter_solflare__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5163);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1247);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8847);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7544);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2472);
/* harmony import */ var _contexts_ConfigProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3751);
/* harmony import */ var _contexts_FullscreenProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7674);
/* harmony import */ var _contexts_PaymentProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3616);
/* harmony import */ var _contexts_ThemeProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3056);
/* harmony import */ var _contexts_TransactionsProvider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9859);
/* harmony import */ var _images_SolanaPayLogo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5082);
/* harmony import */ var _images_SOLIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3961);
/* harmony import */ var _images_GrapeIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7555);
/* harmony import */ var _App_module_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(8715);
/* harmony import */ var _App_module_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_App_module_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _buttons_GenerateButton_module_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5936);
/* harmony import */ var _buttons_GenerateButton_module_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_buttons_GenerateButton_module_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _sections_PoweredBy__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4432);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_phantom__WEBPACK_IMPORTED_MODULE_2__, _solana_wallet_adapter_solflare__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__, _contexts_PaymentProvider__WEBPACK_IMPORTED_MODULE_12__, _contexts_TransactionsProvider__WEBPACK_IMPORTED_MODULE_14__]);
([_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_phantom__WEBPACK_IMPORTED_MODULE_2__, _solana_wallet_adapter_solflare__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__, _contexts_PaymentProvider__WEBPACK_IMPORTED_MODULE_12__, _contexts_TransactionsProvider__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















//import Select, { StylesConfig } from 'react-select'


const App = ({ Component , host , query , pageProps ,  })=>{
    //const baseURL = `http://${host}`;
    const baseURL = `http://${host}`;
    const [selectedMintLabel, setSelectedMintLabel] = react__WEBPACK_IMPORTED_MODULE_8___default().useState("");
    const [selectedMintPublicKey, setSelectedMintPublicKey] = react__WEBPACK_IMPORTED_MODULE_8___default().useState("");
    const [shouldDisplaySelect, setShouldDisplaySelect] = react__WEBPACK_IMPORTED_MODULE_8___default().useState(true);
    const [selectedToken, setSelectedToken] = react__WEBPACK_IMPORTED_MODULE_8___default().useState("");
    const [inputRecipient, setInputRecipient] = react__WEBPACK_IMPORTED_MODULE_8___default().useState("");
    const mintOptions = new Array();
    // If you're testing without a mobile wallet, set this to true to allow a browser wallet to be used.
    const connectWallet = false;
    const network = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletAdapterNetwork.Devnet;
    const wallets = (0,react__WEBPACK_IMPORTED_MODULE_8__.useMemo)(()=>connectWallet ? [
            new _solana_wallet_adapter_phantom__WEBPACK_IMPORTED_MODULE_2__.PhantomWalletAdapter(),
            new _solana_wallet_adapter_solflare__WEBPACK_IMPORTED_MODULE_3__.SolflareWalletAdapter({
                network
            })
        ] : []
    , [
        connectWallet,
        network
    ]);
    // Toggle comments on these lines to use transaction requests instead of transfer requests.
    const link = undefined;
    // const link = useMemo(() => new URL(`${baseURL}/api/`), [baseURL]);
    let recipient = undefined;
    const { recipient: recipientParam , label , message  } = query;
    if (recipientParam && label) {
        try {
            recipient = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.PublicKey(recipientParam);
        } catch (error) {
            console.error(error);
        }
    }
    //const withtoken = params.get('token');
    for (var supported1 of _utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .MAINNET_PAYMENTS */ .JV){
        mintOptions.push({
            value: supported1.MINT,
            label: supported1.LABEL
        });
    //if (supported.LABEL === withtoken){
    //    setSelectedMintLabel(supported.LABEL);
    //    setSelectedMintPublicKey(supported.MINT);
    //}
    }
    function fetchAndSetToken(token) {
        for (var supported of _utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .MAINNET_PAYMENTS */ .JV){
            mintOptions.push({
                value: supported.MINT,
                label: supported.LABEL
            });
            if (supported.LABEL === token) {
                setSelectedMintLabel(supported.LABEL);
                setSelectedMintPublicKey(supported.MINT);
                setSelectedToken(token);
            }
        }
    }
    function setRecipient(e) {
        e.preventDefault();
        //let recipient: PublicKey | undefined = undefined;
        //const { recipient: recipientParam, label, message } = query;
        if (recipientParam && label) {
            try {
                recipient = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.PublicKey(recipientParam);
            } catch (error) {
                console.error(error);
            }
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_ThemeProvider__WEBPACK_IMPORTED_MODULE_13__/* .ThemeProvider */ .f, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: selectedToken.length <= 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        style: {
                            textAlign: "center",
                            marginTop: 2
                        },
                        children: "SELECT SOL / SPL-TOKEN"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_buttons_GenerateButton_module_css__WEBPACK_IMPORTED_MODULE_19___default().token_dark),
                        type: "button",
                        onClick: (e)=>fetchAndSetToken("SOL")
                        ,
                        children: "SOL"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_buttons_GenerateButton_module_css__WEBPACK_IMPORTED_MODULE_19___default().token_dark),
                        type: "button",
                        onClick: (e)=>fetchAndSetToken("USDC")
                        ,
                        children: "USDC"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_buttons_GenerateButton_module_css__WEBPACK_IMPORTED_MODULE_19___default().token_dark),
                        type: "button",
                        onClick: (e)=>fetchAndSetToken("GRAPE")
                        ,
                        children: "GRAPE"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_buttons_GenerateButton_module_css__WEBPACK_IMPORTED_MODULE_19___default().token_dark),
                        type: "button",
                        onClick: (e)=>fetchAndSetToken("MANGO")
                        ,
                        children: "MANGO"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_buttons_GenerateButton_module_css__WEBPACK_IMPORTED_MODULE_19___default().token_dark),
                        type: "button",
                        onClick: (e)=>fetchAndSetToken("UNQ")
                        ,
                        children: "UNQ"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sections_PoweredBy__WEBPACK_IMPORTED_MODULE_18__/* .PoweredBy */ .C, {})
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_FullscreenProvider__WEBPACK_IMPORTED_MODULE_11__/* .FullscreenProvider */ .h, {
                children: recipient && label ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.ConnectionProvider, {
                    endpoint: _utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .DEVNET_ENDPOINT */ .pP,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.WalletProvider, {
                        wallets: wallets,
                        autoConnect: connectWallet,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__.WalletModalProvider, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: selectedMintPublicKey ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: selectedMintPublicKey === "So11111111111111111111111111111111111111112" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_ConfigProvider__WEBPACK_IMPORTED_MODULE_10__/* .ConfigProvider */ .i, {
                                        baseURL: baseURL,
                                        link: link,
                                        recipient: recipient,
                                        label: label,
                                        message: message,
                                        symbol: "SOL",
                                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_images_SOLIcon__WEBPACK_IMPORTED_MODULE_16__/* .SOLIcon */ .a, {}),
                                        decimals: 9,
                                        minDecimals: 1,
                                        connectWallet: connectWallet,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_TransactionsProvider__WEBPACK_IMPORTED_MODULE_14__/* .TransactionsProvider */ .v, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_PaymentProvider__WEBPACK_IMPORTED_MODULE_12__/* .PaymentProvider */ .O, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                                    ...pageProps
                                                })
                                            })
                                        })
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_ConfigProvider__WEBPACK_IMPORTED_MODULE_10__/* .ConfigProvider */ .i, {
                                        baseURL: baseURL,
                                        link: link,
                                        recipient: recipient,
                                        label: label,
                                        message: message,
                                        splToken: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.PublicKey(selectedMintPublicKey),
                                        symbol: selectedMintLabel,
                                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_images_GrapeIcon__WEBPACK_IMPORTED_MODULE_17__/* .GrapeIcon */ .g, {}),
                                        decimals: 6,
                                        minDecimals: 2,
                                        connectWallet: connectWallet,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_TransactionsProvider__WEBPACK_IMPORTED_MODULE_14__/* .TransactionsProvider */ .v, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_PaymentProvider__WEBPACK_IMPORTED_MODULE_12__/* .PaymentProvider */ .O, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                                    ...pageProps
                                                })
                                            })
                                        })
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_ConfigProvider__WEBPACK_IMPORTED_MODULE_10__/* .ConfigProvider */ .i, {
                                        baseURL: baseURL,
                                        link: link,
                                        recipient: recipient,
                                        label: label,
                                        message: "{message}",
                                        splToken: _utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .MAINNET_GRAPE_MINT */ .FI,
                                        symbol: "GRAPE",
                                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_images_GrapeIcon__WEBPACK_IMPORTED_MODULE_17__/* .GrapeIcon */ .g, {}),
                                        decimals: 6,
                                        minDecimals: 2,
                                        connectWallet: connectWallet,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_TransactionsProvider__WEBPACK_IMPORTED_MODULE_14__/* .TransactionsProvider */ .v, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_PaymentProvider__WEBPACK_IMPORTED_MODULE_12__/* .PaymentProvider */ .O, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                                    ...pageProps
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_App_module_css__WEBPACK_IMPORTED_MODULE_20___default().logo),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_images_SolanaPayLogo__WEBPACK_IMPORTED_MODULE_15__/* .SolanaPayLogo */ .f, {
                        width: 240,
                        height: 88
                    })
                })
            })
        })
    });
};
App.getInitialProps = async (appContext)=>{
    const props = await next_app__WEBPACK_IMPORTED_MODULE_7__["default"].getInitialProps(appContext);
    const { query , req  } = appContext.ctx;
    const recipient = query.recipient;
    const label = query.label;
    const message = query.message || undefined;
    const host = req?.headers.host || "localhost:3001";
    return {
        ...props,
        query: {
            recipient,
            label,
            message
        },
        host
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useFullscreen),
/* harmony export */   "s": () => (/* binding */ FullscreenContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const FullscreenContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
function useFullscreen() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(FullscreenContext);
}


/***/ }),

/***/ 6735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ useNavigateWithQuery)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_createURLWithQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7072);
/* harmony import */ var _useConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4022);




function useNavigateWithQuery() {
    const { baseURL  } = (0,_useConfig__WEBPACK_IMPORTED_MODULE_2__/* .useConfig */ .Z)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const { query  } = router;
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((pathname, replace = false)=>{
        const url = String((0,_utils_createURLWithQuery__WEBPACK_IMPORTED_MODULE_3__/* .createURLWithQuery */ .Q)(pathname, baseURL, query));
        if (replace) {
            router.replace(url);
        } else {
            router.push(url);
        }
    }, [
        baseURL,
        query,
        router
    ]);
}


/***/ }),

/***/ 620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ TransactionsContext),
/* harmony export */   "n": () => (/* binding */ useTransactions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const TransactionsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
function useTransactions() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TransactionsContext);
}


/***/ }),

/***/ 113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ arraysEqual)
/* harmony export */ });
function arraysEqual(a, b) {
    if (a === b) return true;
    if (a.length !== b.length) return false;
    for(let i = 0; i < a.length; i++){
        if (a[i] !== b[i]) return false;
    }
    return true;
}


/***/ }),

/***/ 6505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _client_components_pages_App__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _client_components_pages_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6322);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_components_pages_App__WEBPACK_IMPORTED_MODULE_0__]);
_client_components_pages_App__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7831:
/***/ ((module) => {

"use strict";
module.exports = require("@solana/web3.js");

/***/ }),

/***/ 4215:
/***/ ((module) => {

"use strict";
module.exports = require("bignumber.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3932:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/pay");;

/***/ }),

/***/ 1057:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/spl-token");;

/***/ }),

/***/ 3364:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-base");;

/***/ }),

/***/ 1985:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-phantom");;

/***/ }),

/***/ 1247:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ 8847:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ }),

/***/ 5163:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-solflare");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [544,231,472,434], () => (__webpack_exec__(6505)));
module.exports = __webpack_exports__;

})();