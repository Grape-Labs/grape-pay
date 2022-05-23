(() => {
var exports = {};
exports.id = 377;
exports.ids = [377];
exports.modules = {

/***/ 6711:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "ConfirmedPage_root__NVu6B",
	"header": "ConfirmedPage_header__E4eie",
	"main": "ConfirmedPage_main__2_aV8",
	"footer": "ConfirmedPage_footer__w7DVC"
};


/***/ }),

/***/ 3169:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Progress_root__IyYFx",
	"text": "Progress_text__3Fqk_"
};


/***/ }),

/***/ 1293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ pages_ConfirmedPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/client/hooks/usePayment.ts
var usePayment = __webpack_require__(5607);
// EXTERNAL MODULE: ./src/client/components/buttons/BackButton.tsx + 1 modules
var BackButton = __webpack_require__(5966);
// EXTERNAL MODULE: ./src/client/components/buttons/TransactionsLink.tsx + 2 modules
var TransactionsLink = __webpack_require__(1810);
// EXTERNAL MODULE: ./src/client/components/sections/PoweredBy.tsx
var PoweredBy = __webpack_require__(6957);
;// CONCATENATED MODULE: external "color-interpolate"
const external_color_interpolate_namespaceObject = require("color-interpolate");
var external_color_interpolate_default = /*#__PURE__*/__webpack_require__.n(external_color_interpolate_namespaceObject);
;// CONCATENATED MODULE: external "react-circular-progressbar"
const external_react_circular_progressbar_namespaceObject = require("react-circular-progressbar");
// EXTERNAL MODULE: ./src/client/components/sections/Progress.module.css
var Progress_module = __webpack_require__(3169);
var Progress_module_default = /*#__PURE__*/__webpack_require__.n(Progress_module);
;// CONCATENATED MODULE: ./src/client/components/sections/Progress.tsx







const Progress = ()=>{
    const { status , progress  } = (0,usePayment/* usePayment */.V7)();
    const { 0: value , 1: text  } = (0,external_react_.useMemo)(()=>{
        switch(status){
            case usePayment/* PaymentStatus.Finalized */.bG.Finalized:
                return [
                    1,
                    'Complete'
                ];
            case usePayment/* PaymentStatus.Confirmed */.bG.Confirmed:
            case usePayment/* PaymentStatus.Valid */.bG.Valid:
                return progress >= 1 ? [
                    1,
                    'Complete'
                ] : [
                    progress,
                    Math.floor(progress * 100) + '%'
                ];
            default:
                return [
                    0,
                    status
                ];
        }
    }, [
        status,
        progress
    ]);
    const interpolated = (0,external_react_.useMemo)(()=>external_color_interpolate_default()([
            '#8752f3',
            '#5497d5',
            '#43b4ca',
            '#28e0b9',
            '#19fb9b'
        ])
    , []);
    const styles = (0,external_react_.useMemo)(()=>(0,external_react_circular_progressbar_namespaceObject.buildStyles)({
            pathTransitionDuration: 0.5,
            pathColor: interpolated(value),
            trailColor: 'rgba(0,0,0,.1)'
        })
    , [
        interpolated,
        value
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Progress_module_default()).root,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_circular_progressbar_namespaceObject.CircularProgressbar, {
                maxValue: 1,
                value: value,
                styles: styles
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Progress_module_default()).text,
                children: text
            })
        ]
    }));
};

// EXTERNAL MODULE: ./src/client/components/pages/ConfirmedPage.module.css
var ConfirmedPage_module = __webpack_require__(6711);
var ConfirmedPage_module_default = /*#__PURE__*/__webpack_require__.n(ConfirmedPage_module);
;// CONCATENATED MODULE: ./src/client/components/pages/ConfirmedPage.tsx








const ConfirmedPage = ()=>{
    const { reset  } = (0,usePayment/* usePayment */.V7)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (ConfirmedPage_module_default()).root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (ConfirmedPage_module_default()).header,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(BackButton/* BackButton */.x, {
                        onClick: reset,
                        children: "Start Over"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TransactionsLink/* TransactionsLink */.G, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (ConfirmedPage_module_default()).main,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Progress, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (ConfirmedPage_module_default()).footer,
                children: /*#__PURE__*/ jsx_runtime_.jsx(PoweredBy/* PoweredBy */.C, {})
            })
        ]
    }));
};
/* harmony default export */ const pages_ConfirmedPage = (ConfirmedPage);

;// CONCATENATED MODULE: ./src/pages/confirmed.tsx



/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

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

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,286,966,231,810], () => (__webpack_exec__(1293)));
module.exports = __webpack_exports__;

})();