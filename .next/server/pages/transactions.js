(() => {
var exports = {};
exports.id = 673;
exports.ids = [673];
exports.modules = {

/***/ 5965:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "TransactionsPage_root__OQjHb",
	"header": "TransactionsPage_header__U_QAU",
	"main": "TransactionsPage_main__giHbP"
};


/***/ }),

/***/ 9874:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Transactions_root___e3KA",
	"title": "Transactions_title__xl6Ek",
	"transaction": "Transactions_transaction__6JZoQ",
	"icon": "Transactions_icon__0NSPE",
	"left": "Transactions_left__oxT0R",
	"amount": "Transactions_amount__E95tM",
	"signature": "Transactions_signature__2hyzv",
	"right": "Transactions_right__USFNr",
	"time": "Transactions_time___F36M",
	"status": "Transactions_status__ei78u",
	"status-finalized": "Transactions_status-finalized__g9YdC"
};


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

/***/ 5449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ pages_TransactionsPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/client/components/buttons/BackButton.tsx + 1 modules
var BackButton = __webpack_require__(5007);
// EXTERNAL MODULE: ./src/client/components/sections/PoweredBy.tsx
var PoweredBy = __webpack_require__(4432);
// EXTERNAL MODULE: external "bignumber.js"
var external_bignumber_js_ = __webpack_require__(4215);
var external_bignumber_js_default = /*#__PURE__*/__webpack_require__.n(external_bignumber_js_);
;// CONCATENATED MODULE: external "clsx"
const external_clsx_namespaceObject = require("clsx");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_namespaceObject);
;// CONCATENATED MODULE: external "date-fns"
const external_date_fns_namespaceObject = require("date-fns");
// EXTERNAL MODULE: ./src/client/hooks/useConfig.ts
var useConfig = __webpack_require__(4022);
// EXTERNAL MODULE: ./src/client/hooks/useTransactions.ts
var useTransactions = __webpack_require__(620);
// EXTERNAL MODULE: ./src/client/utils/constants.ts
var constants = __webpack_require__(2472);
// EXTERNAL MODULE: ./src/client/components/sections/Amount.tsx
var Amount = __webpack_require__(5658);
// EXTERNAL MODULE: ./src/client/components/sections/Transactions.module.css
var Transactions_module = __webpack_require__(9874);
var Transactions_module_default = /*#__PURE__*/__webpack_require__.n(Transactions_module);
;// CONCATENATED MODULE: ./src/client/components/sections/Transactions.tsx










const Transactions = ()=>{
    const { transactions  } = (0,useTransactions/* useTransactions */.n)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Transactions_module_default()).root,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Transactions_module_default()).title,
                children: "Recent Transactions"
            }),
            transactions.map((transaction)=>/*#__PURE__*/ jsx_runtime_.jsx(Transaction, {
                    transaction: transaction
                }, transaction.signature)
            )
        ]
    });
};
const Transaction = ({ transaction  })=>{
    const { icon , symbol  } = (0,useConfig/* useConfig */.Z)();
    const amount = (0,external_react_.useMemo)(()=>new (external_bignumber_js_default())(transaction.amount)
    , [
        transaction.amount
    ]);
    const signature = (0,external_react_.useMemo)(()=>transaction.signature.slice(0, 8) + "...." + transaction.signature.slice(-8)
    , [
        transaction.signature
    ]);
    const getTime = (0,external_react_.useCallback)(()=>(0,external_date_fns_namespaceObject.formatDistance)(new Date(), new Date(transaction.timestamp * 1000)) + " ago"
    , [
        transaction.timestamp
    ]);
    const { 0: time , 1: setTime  } = (0,external_react_.useState)(getTime());
    (0,external_react_.useEffect)(()=>{
        const interval = setInterval(()=>setTime(getTime())
        , 1000);
        return ()=>clearInterval(interval)
        ;
    }, [
        getTime
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Transactions_module_default()).transaction,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Transactions_module_default()).icon,
                children: icon
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Transactions_module_default()).left,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Transactions_module_default()).amount,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Amount/* Amount */.$, {
                                amount: amount,
                                showZero: true
                            }),
                            constants/* NON_BREAKING_SPACE */.qD + symbol
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Transactions_module_default()).signature,
                        children: signature
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Transactions_module_default()).right,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Transactions_module_default()).time,
                        children: time
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: external_clsx_default()((Transactions_module_default()).status, (Transactions_module_default())[`status-${transaction.status}`]),
                        children: transaction.status
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/client/components/pages/TransactionsPage.module.css
var TransactionsPage_module = __webpack_require__(5965);
var TransactionsPage_module_default = /*#__PURE__*/__webpack_require__.n(TransactionsPage_module);
;// CONCATENATED MODULE: ./src/client/components/pages/TransactionsPage.tsx







const TransactionsPage = ()=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (TransactionsPage_module_default()).root,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (TransactionsPage_module_default()).header,
                children: /*#__PURE__*/ jsx_runtime_.jsx(BackButton/* BackButton */.x, {
                    onClick: router.back,
                    children: "Back"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (TransactionsPage_module_default()).main,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Transactions, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PoweredBy/* PoweredBy */.C, {})
        ]
    });
};
/* harmony default export */ const pages_TransactionsPage = (TransactionsPage);

;// CONCATENATED MODULE: ./src/pages/transactions.tsx



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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [231,472,7], () => (__webpack_exec__(5449)));
module.exports = __webpack_exports__;

})();