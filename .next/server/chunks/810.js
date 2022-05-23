exports.id = 810;
exports.ids = [810];
exports.modules = {

/***/ 8993:
/***/ ((module) => {

// Exports
module.exports = {
	"link": "TransactionsLink_link__cYpwJ"
};


/***/ }),

/***/ 1810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "G": () => (/* binding */ TransactionsLink)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-responsive"
var external_react_responsive_ = __webpack_require__(6666);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/client/utils/createURLWithQuery.ts
var createURLWithQuery = __webpack_require__(6134);
// EXTERNAL MODULE: ./src/client/hooks/useConfig.ts
var useConfig = __webpack_require__(1283);
;// CONCATENATED MODULE: ./src/client/hooks/useLinkWithQuery.ts




function useLinkWithQuery(pathname) {
    const { baseURL  } = (0,useConfig/* useConfig */.Z)();
    const { query  } = (0,router_.useRouter)();
    return (0,external_react_.useMemo)(()=>String((0,createURLWithQuery/* createURLWithQuery */.Q)(pathname, baseURL, query))
    , [
        pathname,
        baseURL,
        query
    ]);
}

;// CONCATENATED MODULE: ./src/client/components/images/ActivityIcon.tsx


const ActivityIcon = ({ width =20 , height =20  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: width,
        height: height,
        fill: "none",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "m13 2-10 12h9l-1 8 10-12h-9z",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2"
        })
    }));
};

// EXTERNAL MODULE: ./src/client/components/buttons/TransactionsLink.module.css
var TransactionsLink_module = __webpack_require__(8993);
var TransactionsLink_module_default = /*#__PURE__*/__webpack_require__.n(TransactionsLink_module);
;// CONCATENATED MODULE: ./src/client/components/buttons/TransactionsLink.tsx







const TransactionsLink = ()=>{
    const to = useLinkWithQuery('/transactions');
    const phone = (0,external_react_responsive_.useMediaQuery)({
        query: '(max-width: 767px)'
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: to,
        passHref: true,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            className: (TransactionsLink_module_default()).link,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(ActivityIcon, {}),
                phone ? null : 'Recent Transactions'
            ]
        })
    }));
};


/***/ })

};
;