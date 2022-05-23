(() => {
var exports = {};
exports.id = 870;
exports.ids = [870];
exports.modules = {

/***/ 2103:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "PendingPage_root__I3riW",
	"header": "PendingPage_header__nYybQ",
	"main": "PendingPage_main__uKCBM",
	"total": "PendingPage_total__COTrX",
	"amount": "PendingPage_amount__ulzsm",
	"code": "PendingPage_code__ONaCd",
	"symbol": "PendingPage_symbol__52g8E",
	"scan": "PendingPage_scan___otg6",
	"confirm": "PendingPage_confirm__vDm1v",
	"footer": "PendingPage_footer__JwKFb"
};


/***/ }),

/***/ 1374:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "QRCode_root__io_2z"
};


/***/ }),

/***/ 7223:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ getServerSideProps),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1247);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8847);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4022);
/* harmony import */ var _hooks_usePayment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2347);
/* harmony import */ var _buttons_BackButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5007);
/* harmony import */ var _sections_Amount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5658);
/* harmony import */ var _sections_PoweredBy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4432);
/* harmony import */ var _sections_QRCode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6158);
/* harmony import */ var _PendingPage_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2103);
/* harmony import */ var _PendingPage_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_PendingPage_module_css__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__, _sections_QRCode__WEBPACK_IMPORTED_MODULE_9__]);
([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__, _sections_QRCode__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const PendingPage = ()=>{
    const { symbol , connectWallet  } = (0,_hooks_useConfig__WEBPACK_IMPORTED_MODULE_4__/* .useConfig */ .Z)();
    const { amount , reset  } = (0,_hooks_usePayment__WEBPACK_IMPORTED_MODULE_5__/* .usePayment */ .V7)();
    const { publicKey  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useWallet)();
    const { setVisible  } = (0,_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__.useWalletModal)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (connectWallet && !publicKey) {
            setVisible(true);
        }
    }, [
        connectWallet,
        publicKey,
        setVisible
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_PendingPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().root),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_PendingPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().header),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_buttons_BackButton__WEBPACK_IMPORTED_MODULE_6__/* .BackButton */ .x, {
                        onClick: reset,
                        children: "Cancel"
                    }),
                    connectWallet ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__.WalletMultiButton, {}) : null
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_PendingPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().main),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_PendingPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().amount),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sections_Amount__WEBPACK_IMPORTED_MODULE_7__/* .Amount */ .$, {
                            amount: amount
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_PendingPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().symbol),
                        children: symbol
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_PendingPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().code),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sections_QRCode__WEBPACK_IMPORTED_MODULE_9__/* .QRCode */ .s, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_PendingPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().scan),
                        children: "Scan this code with your Solana Pay wallet"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_PendingPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().confirm),
                        children: "You'll be asked to approve the transaction"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_PendingPage_module_css__WEBPACK_IMPORTED_MODULE_10___default().footer),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sections_PoweredBy__WEBPACK_IMPORTED_MODULE_8__/* .PoweredBy */ .C, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PendingPage);
function getServerSideProps() {
    // Required so getInitialProps re-runs on the server-side
    // If it runs on client-side then there's no req and the URL reading doesn't work
    // See https://nextjs.org/docs/api-reference/data-fetching/get-initial-props
    return {
        props: {}
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Amount)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4022);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2472);




const Amount = ({ amount , showZero  })=>{
    const { minDecimals  } = (0,_hooks_useConfig__WEBPACK_IMPORTED_MODULE_2__/* .useConfig */ .Z)();
    const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (!amount) return _utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .NON_BREAKING_SPACE */ .qD;
        if (amount.isGreaterThan(0)) {
            return amount.toFormat(amount.decimalPlaces() < minDecimals ? minDecimals : amount.decimalPlaces());
        } else {
            return showZero ? "0" : _utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .NON_BREAKING_SPACE */ .qD;
        }
    }, [
        amount,
        minDecimals,
        showZero
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        children: value
    });
};


/***/ }),

/***/ 6158:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ QRCode)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_pay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3932);
/* harmony import */ var _solana_qr_code_styling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2093);
/* harmony import */ var _solana_qr_code_styling__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_solana_qr_code_styling__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_usePayment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2347);
/* harmony import */ var _QRCode_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1374);
/* harmony import */ var _QRCode_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_QRCode_module_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_pay__WEBPACK_IMPORTED_MODULE_1__]);
_solana_pay__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const QRCode = ()=>{
    const { 0: size , 1: setSize  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(()=> true ? 400 : 0
    );
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const listener = ()=>setSize(Math.min(window.screen.availWidth - 48, 400))
        ;
        window.addEventListener("resize", listener);
        return ()=>window.removeEventListener("resize", listener)
        ;
    }, []);
    const { url  } = (0,_hooks_usePayment__WEBPACK_IMPORTED_MODULE_4__/* .usePayment */ .V7)();
    const options = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>(0,_solana_pay__WEBPACK_IMPORTED_MODULE_1__.createQROptions)(url, size, "transparent", "#2a2a2a")
    , [
        url,
        size
    ]);
    const qr = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>new (_solana_qr_code_styling__WEBPACK_IMPORTED_MODULE_2___default())()
    , []);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>qr.update(options)
    , [
        qr,
        options
    ]);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (ref.current) {
            qr.append(ref.current);
        }
    }, [
        ref,
        qr
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (_QRCode_module_css__WEBPACK_IMPORTED_MODULE_5___default().root)
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lq": () => (/* binding */ PaymentContext),
/* harmony export */   "V7": () => (/* binding */ usePayment),
/* harmony export */   "bG": () => (/* binding */ PaymentStatus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var PaymentStatus;
(function(PaymentStatus) {
    PaymentStatus["New"] = "New";
    PaymentStatus["Pending"] = "Pending";
    PaymentStatus["Confirmed"] = "Confirmed";
    PaymentStatus["Valid"] = "Valid";
    PaymentStatus["Invalid"] = "Invalid";
    PaymentStatus["Finalized"] = "Finalized";
})(PaymentStatus || (PaymentStatus = {}));
const PaymentContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
function usePayment() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PaymentContext);
}


/***/ }),

/***/ 7040:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _client_components_pages_PendingPage__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ _client_components_pages_PendingPage__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var _client_components_pages_PendingPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7223);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_components_pages_PendingPage__WEBPACK_IMPORTED_MODULE_0__]);
_client_components_pages_PendingPage__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2093:
/***/ ((module) => {

"use strict";
module.exports = require("@solana/qr-code-styling");

/***/ }),

/***/ 7831:
/***/ ((module) => {

"use strict";
module.exports = require("@solana/web3.js");

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

/***/ 1247:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ 8847:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [231,472,7], () => (__webpack_exec__(7040)));
module.exports = __webpack_exports__;

})();