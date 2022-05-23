"use strict";
(() => {
var exports = {};
exports.id = 237;
exports.ids = [237];
exports.modules = {

/***/ 7274:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _server_api_index__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _server_api_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8769);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server_api_index__WEBPACK_IMPORTED_MODULE_0__]);
_server_api_index__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8769:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _solana_pay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3932);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7716);
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5561);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_pay__WEBPACK_IMPORTED_MODULE_0__]);
_solana_pay__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const get = async (request, response)=>{
    const label = request.query.label;
    if (!label) throw new Error("missing label");
    if (typeof label !== "string") throw new Error("invalid label");
    const icon = `https://${request.headers.host}/solana-pay-logo.svg`;
    response.status(200).send({
        label,
        icon
    });
};
const post = async (request, response)=>{
    /*
    Transfer request params provided in the URL by the app client. In practice, these should be generated on the server,
    persisted along with an unpredictable opaque ID representing the payment, and the ID be passed to the app client,
    which will include the ID in the transaction request URL. This prevents tampering with the transaction request.
    */ const recipientField = request.query.recipient;
    if (!recipientField) throw new Error("missing recipient");
    if (typeof recipientField !== "string") throw new Error("invalid recipient");
    const recipient = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(recipientField);
    const amountField = request.query.amount;
    if (!amountField) throw new Error("missing amount");
    if (typeof amountField !== "string") throw new Error("invalid amount");
    const amount = new (bignumber_js__WEBPACK_IMPORTED_MODULE_2___default())(amountField);
    const splTokenField = request.query["spl-token"];
    if (splTokenField && typeof splTokenField !== "string") throw new Error("invalid spl-token");
    const splToken = splTokenField ? new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(splTokenField) : undefined;
    const referenceField = request.query.reference;
    if (!referenceField) throw new Error("missing reference");
    if (typeof referenceField !== "string") throw new Error("invalid reference");
    const reference = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(referenceField);
    const memoParam = request.query.memo;
    if (memoParam && typeof memoParam !== "string") throw new Error("invalid memo");
    const memo = memoParam || undefined;
    const messageParam = request.query.message;
    if (messageParam && typeof messageParam !== "string") throw new Error("invalid message");
    const message = messageParam || undefined;
    // Account provided in the transaction request body by the wallet.
    const accountField = request.body?.account;
    if (!accountField) throw new Error("missing account");
    if (typeof accountField !== "string") throw new Error("invalid account");
    const account = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(accountField);
    // Compose a simple transfer transaction to return. In practice, this can be any transaction, and may be signed.
    let transaction = await (0,_solana_pay__WEBPACK_IMPORTED_MODULE_0__.createTransfer)(_core__WEBPACK_IMPORTED_MODULE_3__/* .connection */ .ZI, account, {
        recipient,
        amount,
        splToken,
        reference,
        memo
    });
    // Serialize and deserialize the transaction. This ensures consistent ordering of the account keys for signing.
    transaction = _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.Transaction.from(transaction.serialize({
        verifySignatures: false,
        requireAllSignatures: false
    }));
    // Serialize and return the unsigned transaction.
    const serialized = transaction.serialize({
        verifySignatures: false,
        requireAllSignatures: false
    });
    const base64 = serialized.toString("base64");
    response.status(200).send({
        transaction: base64,
        message
    });
};
const index = async (request, response)=>{
    await (0,_middleware__WEBPACK_IMPORTED_MODULE_4__/* .cors */ .D)(request, response);
    await (0,_middleware__WEBPACK_IMPORTED_MODULE_4__/* .rateLimit */ .h)(request, response);
    if (request.method === "GET") return get(request, response);
    if (request.method === "POST") return post(request, response);
    throw new Error(`Unexpected method ${request.method}`);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "k7": () => (/* reexport */ RATE_LIMIT),
  "ft": () => (/* reexport */ RATE_LIMIT_INTERVAL),
  "ZI": () => (/* reexport */ connection)
});

// UNUSED EXPORTS: CLUSTER_ENDPOINT, cache

;// CONCATENATED MODULE: external "cache-manager"
const external_cache_manager_namespaceObject = require("cache-manager");
var external_cache_manager_default = /*#__PURE__*/__webpack_require__.n(external_cache_manager_namespaceObject);
;// CONCATENATED MODULE: external "cache-manager/lib/stores/memory"
const memory_namespaceObject = require("cache-manager/lib/stores/memory");
var memory_default = /*#__PURE__*/__webpack_require__.n(memory_namespaceObject);
;// CONCATENATED MODULE: ./src/server/core/cache.ts

// @ts-ignore (TS7016) There is no type definition for this at DefinitelyTyped.

const cache = external_cache_manager_default().caching({
    store: (memory_default()),
    max: 1000,
    ttl: 120 /*seconds*/ 
});

// EXTERNAL MODULE: external "@solana/web3.js"
var web3_js_ = __webpack_require__(7831);
;// CONCATENATED MODULE: ./src/server/core/env.ts
const CLUSTER_ENDPOINT = process.env.CLUSTER_ENDPOINT || "https://api.devnet.solana.com";
const RATE_LIMIT = Number(process.env.RATE_LIMIT) || undefined;
const RATE_LIMIT_INTERVAL = Number(process.env.RATE_LIMIT_INTERVAL) || undefined;

;// CONCATENATED MODULE: ./src/server/core/connection.ts


const connection = new web3_js_.Connection(CLUSTER_ENDPOINT || "https://api.devnet.solana.com", "confirmed");

;// CONCATENATED MODULE: ./src/server/core/index.ts





/***/ }),

/***/ 5561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* reexport */ cors),
  "h": () => (/* reexport */ rateLimit)
});

;// CONCATENATED MODULE: external "cors"
const external_cors_namespaceObject = require("cors");
var external_cors_default = /*#__PURE__*/__webpack_require__.n(external_cors_namespaceObject);
;// CONCATENATED MODULE: ./src/server/middleware/wrapExpressHandler.ts
// Wrap an Express middleware function for compatibility with Next
const wrapExpressHandler = function(handler) {
    return function(request, response) {
        return new Promise(function(resolve, reject) {
            handler(request, response, function(error) {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    };
};

;// CONCATENATED MODULE: ./src/server/middleware/cors.ts


const cors = wrapExpressHandler(external_cors_default()({
    origin: true,
    methods: [
        "POST"
    ]
}));

;// CONCATENATED MODULE: external "express-rate-limit"
const external_express_rate_limit_namespaceObject = require("express-rate-limit");
var external_express_rate_limit_default = /*#__PURE__*/__webpack_require__.n(external_express_rate_limit_namespaceObject);
// EXTERNAL MODULE: ./src/server/core/index.ts + 5 modules
var core = __webpack_require__(7716);
;// CONCATENATED MODULE: ./src/server/middleware/rateLimit.ts



// Just basic IP rate-limiting for now
const rateLimit = wrapExpressHandler(external_express_rate_limit_default()({
    keyGenerator: (req)=>(req.headers["x-real-ip"] ?? req.socket.remoteAddress) ?? "UNKNOWN"
    ,
    max: core/* RATE_LIMIT */.k7 ?? 10,
    windowMs: core/* RATE_LIMIT_INTERVAL */.ft ?? 60
}));

;// CONCATENATED MODULE: ./src/server/middleware/index.ts




/***/ }),

/***/ 7831:
/***/ ((module) => {

module.exports = require("@solana/web3.js");

/***/ }),

/***/ 4215:
/***/ ((module) => {

module.exports = require("bignumber.js");

/***/ }),

/***/ 3932:
/***/ ((module) => {

module.exports = import("@solana/pay");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7274));
module.exports = __webpack_exports__;

})();