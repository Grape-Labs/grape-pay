exports.id = 966;
exports.ids = [966];
exports.modules = {

/***/ 349:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "BackButton_button__uoNsh"
};


/***/ }),

/***/ 5966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* binding */ BackButton)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/client/components/images/BackIcon.tsx


const BackIcon = ({ width =20 , height =20  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: width,
        height: height,
        fill: "none",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "m15 18-6-6 6-6",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2"
        })
    }));
};

// EXTERNAL MODULE: ./src/client/components/buttons/BackButton.module.css
var BackButton_module = __webpack_require__(349);
var BackButton_module_default = /*#__PURE__*/__webpack_require__.n(BackButton_module);
;// CONCATENATED MODULE: ./src/client/components/buttons/BackButton.tsx




const BackButton = ({ children , onClick  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        className: (BackButton_module_default()).button,
        type: "button",
        onClick: onClick,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(BackIcon, {}),
            children
        ]
    }));
};


/***/ })

};
;