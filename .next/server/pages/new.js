(() => {
var exports = {};
exports.id = 971;
exports.ids = [971];
exports.modules = {

/***/ 9090:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "NewPage_root__5tkEv",
	"body": "NewPage_body___rEz_",
	"top": "NewPage_top__Zeh0Y",
	"main": "NewPage_main__m9WyL",
	"side": "NewPage_side__dw_Lg",
	"summary": "NewPage_summary__NrW20",
	"bottom": "NewPage_bottom__KoVlH"
};


/***/ }),

/***/ 3532:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "NumPad_root___rObS",
	"text": "NumPad_text__dE0jk",
	"value": "NumPad_value__dLsnj",
	"buttons": "NumPad_buttons__74I7o",
	"row": "NumPad_row__ofTk3",
	"button": "NumPad_button__V4xyd"
};


/***/ }),

/***/ 1267:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Summary_root__CAGHh",
	"title": "Summary_title__RrfPV",
	"total": "Summary_total__HL996",
	"totalLeft": "Summary_totalLeft__rezwv",
	"totalRight": "Summary_totalRight__eOPqm",
	"symbol": "Summary_symbol__kXZyb",
	"amount": "Summary_amount__Te5No"
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

/***/ 1406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ pages_NewPage),
  "getServerSideProps": () => (/* reexport */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-responsive"
var external_react_responsive_ = __webpack_require__(6666);
// EXTERNAL MODULE: ./src/client/components/buttons/FullscreenButton.tsx + 2 modules
var FullscreenButton = __webpack_require__(7241);
// EXTERNAL MODULE: ./src/client/hooks/usePayment.ts
var usePayment = __webpack_require__(2347);
// EXTERNAL MODULE: ./src/client/components/buttons/GenerateButton.module.css
var GenerateButton_module = __webpack_require__(5936);
var GenerateButton_module_default = /*#__PURE__*/__webpack_require__.n(GenerateButton_module);
;// CONCATENATED MODULE: ./src/client/components/buttons/GenerateButton.tsx




const GenerateButton = ()=>{
    const { amount , generate  } = (0,usePayment/* usePayment */.V7)();
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: (GenerateButton_module_default()).root,
        type: "button",
        onClick: generate,
        disabled: !amount || amount.isLessThanOrEqualTo(0),
        children: "Generate Payment Code"
    });
};

// EXTERNAL MODULE: ./src/client/components/buttons/TransactionsLink.tsx + 2 modules
var TransactionsLink = __webpack_require__(3380);
// EXTERNAL MODULE: external "bignumber.js"
var external_bignumber_js_ = __webpack_require__(4215);
var external_bignumber_js_default = /*#__PURE__*/__webpack_require__.n(external_bignumber_js_);
// EXTERNAL MODULE: ./src/client/hooks/useConfig.ts
var useConfig = __webpack_require__(4022);
;// CONCATENATED MODULE: ./src/client/components/images/BackspaceIcon.tsx


const BackspaceIcon = ({ width =36 , height =36  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: width,
        height: width,
        fill: "none",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "m6.81504 4.20001c-.31434 0-.61038.1478-.79928.39904l-5.563909 7.40005c-.267629.3559-.267629.8459 0 1.2019l5.563909 7.4c.1889.2512.48494.399.79928.399h16.18496c.5523 0 1-.4477 1-1v-14.79999c0-.55228-.4477-1-1-1zm2.37103 13.60929c-.24809-.2543-.24809-.6666 0-.9209l4.31553-4.4232-4.05238-4.15357c-.2481-.2543-.2481-.66659 0-.92088.2481-.2543.65038-.2543.89848 0l4.0523 4.15355 4.0523-4.15357c.2481-.25429.6504-.25429.8985 0 .2481.2543.2481.66659 0 .92088l-4.0524 4.15359 4.3155 4.4232c.2481.2543.2481.6666 0 .9209s-.6503.2543-.8984 0l-4.3155-4.4233-4.3155 4.4233c-.24808.2543-.65033.2543-.89843 0z",
            fill: "currentColor"
        })
    });
};

// EXTERNAL MODULE: ./src/client/components/sections/NumPad.module.css
var NumPad_module = __webpack_require__(3532);
var NumPad_module_default = /*#__PURE__*/__webpack_require__.n(NumPad_module);
;// CONCATENATED MODULE: ./src/client/components/sections/NumPad.tsx







const NumPadButton = ({ input , onInput  })=>{
    const onClick = (0,external_react_.useCallback)(()=>onInput(input)
    , [
        onInput,
        input
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: (NumPad_module_default()).button,
        type: "button",
        onClick: onClick,
        children: input
    });
};
const NumPad = ()=>{
    const { symbol , decimals  } = (0,useConfig/* useConfig */.Z)();
    const regExp = (0,external_react_.useMemo)(()=>new RegExp("^\\d*([.,]\\d{0," + decimals + "})?$")
    , [
        decimals
    ]);
    const { 0: value1 , 1: setValue  } = (0,external_react_.useState)("0");
    const onInput = (0,external_react_.useCallback)((key)=>setValue((value)=>{
            let newValue = (value + key).trim().replace(/^0{2,}/, "0");
            if (newValue) {
                newValue = /^[.,]/.test(newValue) ? `0${newValue}` : newValue.replace(/^0+(\d)/, "$1");
                if (regExp.test(newValue)) return newValue;
            }
            return value;
        })
    , [
        regExp
    ]);
    const onBackspace = (0,external_react_.useCallback)(()=>setValue((value)=>value.length ? value.slice(0, -1) || "0" : value
        )
    , []);
    const { setAmount  } = (0,usePayment/* usePayment */.V7)();
    (0,external_react_.useEffect)(()=>setAmount(value1 ? new (external_bignumber_js_default())(value1) : undefined)
    , [
        setAmount,
        value1
    ]);
    function refreshPage() {
        window.location.reload();
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (NumPad_module_default()).root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (NumPad_module_default()).text,
                children: [
                    "Enter amount in ",
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        style: {
                            border: "1px solid #0063cc",
                            borderRadius: "8px",
                            cursor: "pointer"
                        },
                        onClick: refreshPage,
                        children: symbol
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (NumPad_module_default()).value,
                children: value1
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (NumPad_module_default()).buttons,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (NumPad_module_default()).row,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(NumPadButton, {
                                input: 1,
                                onInput: onInput
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(NumPadButton, {
                                input: 2,
                                onInput: onInput
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(NumPadButton, {
                                input: 3,
                                onInput: onInput
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (NumPad_module_default()).row,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(NumPadButton, {
                                input: 4,
                                onInput: onInput
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(NumPadButton, {
                                input: 5,
                                onInput: onInput
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(NumPadButton, {
                                input: 6,
                                onInput: onInput
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (NumPad_module_default()).row,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(NumPadButton, {
                                input: 7,
                                onInput: onInput
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(NumPadButton, {
                                input: 8,
                                onInput: onInput
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(NumPadButton, {
                                input: 9,
                                onInput: onInput
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (NumPad_module_default()).row,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(NumPadButton, {
                                input: ".",
                                onInput: onInput
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(NumPadButton, {
                                input: 0,
                                onInput: onInput
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: (NumPad_module_default()).button,
                                type: "button",
                                onClick: onBackspace,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(BackspaceIcon, {})
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/client/components/sections/PoweredBy.tsx
var PoweredBy = __webpack_require__(4432);
// EXTERNAL MODULE: ./src/client/components/sections/Amount.tsx
var Amount = __webpack_require__(5658);
// EXTERNAL MODULE: ./src/client/components/sections/Summary.module.css
var Summary_module = __webpack_require__(1267);
var Summary_module_default = /*#__PURE__*/__webpack_require__.n(Summary_module);
;// CONCATENATED MODULE: ./src/client/components/sections/Summary.tsx






const Summary = ()=>{
    const { symbol  } = (0,useConfig/* useConfig */.Z)();
    const { amount  } = (0,usePayment/* usePayment */.V7)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Summary_module_default()).root,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Summary_module_default()).title,
                children: "Balance Due"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Summary_module_default()).total,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Summary_module_default()).totalLeft,
                        children: "Total"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Summary_module_default()).totalRight,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Summary_module_default()).symbol,
                                children: symbol
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Summary_module_default()).amount,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Amount/* Amount */.$, {
                                    amount: amount
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/client/components/pages/NewPage.module.css
var NewPage_module = __webpack_require__(9090);
var NewPage_module_default = /*#__PURE__*/__webpack_require__.n(NewPage_module);
;// CONCATENATED MODULE: ./src/client/components/pages/NewPage.tsx










const NewPage = ()=>{
    const phone = (0,external_react_responsive_.useMediaQuery)({
        query: "(max-width: 767px)"
    });
    return phone ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (NewPage_module_default()).root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (NewPage_module_default()).top,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(FullscreenButton/* FullscreenButton */.d, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(TransactionsLink/* TransactionsLink */.G, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (NewPage_module_default()).body,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NumPad, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(GenerateButton, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PoweredBy/* PoweredBy */.C, {})
        ]
    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (NewPage_module_default()).root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (NewPage_module_default()).main,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (NewPage_module_default()).top,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(FullscreenButton/* FullscreenButton */.d, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (NewPage_module_default()).body,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(NumPad, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(PoweredBy/* PoweredBy */.C, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (NewPage_module_default()).side,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (NewPage_module_default()).summary,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Summary, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(GenerateButton, {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (NewPage_module_default()).bottom,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(TransactionsLink/* TransactionsLink */.G, {})
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const pages_NewPage = (NewPage);
function getServerSideProps() {
    // Required so getInitialProps re-runs on the server-side
    // If it runs on client-side then there's no req and the URL reading doesn't work
    // See https://nextjs.org/docs/api-reference/data-fetching/get-initial-props
    return {
        props: {}
    };
}

;// CONCATENATED MODULE: ./src/pages/new.tsx



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

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

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

/***/ 6666:
/***/ ((module) => {

"use strict";
module.exports = require("react-responsive");

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
var __webpack_exports__ = __webpack_require__.X(0, [505,664,231,472,434,414,380], () => (__webpack_exec__(1406)));
module.exports = __webpack_exports__;

})();