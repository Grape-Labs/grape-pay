"use strict";
exports.id = 231;
exports.ids = [231];
exports.modules = {

/***/ 5607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bG": () => (/* binding */ PaymentStatus),
/* harmony export */   "Lq": () => (/* binding */ PaymentContext),
/* harmony export */   "V7": () => (/* binding */ usePayment)
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

/***/ 6134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ createURLWithQuery)
/* harmony export */ });
function createURLWithQuery(url, base, query) {
    url = new URL(url, base);
    for (const [key, value] of Object.entries(query)){
        if (value) {
            if (Array.isArray(value)) {
                for (const v of value){
                    url.searchParams.append(key, v);
                }
            } else {
                url.searchParams.append(key, value);
            }
        }
    }
    return url;
}


/***/ })

};
;