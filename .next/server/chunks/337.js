"use strict";
exports.id = 337;
exports.ids = [337];
exports.modules = {

/***/ 8337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Xc": () => (/* binding */ MAX_CONFIRMATIONS),
/* harmony export */   "qD": () => (/* binding */ NON_BREAKING_SPACE),
/* harmony export */   "pP": () => (/* binding */ DEVNET_ENDPOINT),
/* harmony export */   "JV": () => (/* binding */ MAINNET_PAYMENTS),
/* harmony export */   "FI": () => (/* binding */ MAINNET_GRAPE_MINT)
/* harmony export */ });
/* unused harmony exports MAINNET_ENDPOINT, DEVNET_DUMMY_MINT, MAINNET_USDC_MINT */
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_0__);

const MAX_CONFIRMATIONS = 32;
const NON_BREAKING_SPACE = '\xa0';
// GenesysGo's devnet endpoint doesn't retain historical transactions
//export const DEVNET_ENDPOINT = clusterApiUrl('devnet');
const DEVNET_ENDPOINT = 'https://solana-mainnet.phantom.tech';
// Use Phantom's mainnet endpoint instead of GenesysGo (auth issue) or default (ratelimits)
const MAINNET_ENDPOINT = 'https://solana-mainnet.phantom.tech';
// Mint DUMMY tokens on devnet @ https://spl-token-faucet.com
const DEVNET_DUMMY_MINT = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey('Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr');
const MAINNET_PAYMENTS = [
    {
        LABEL: 'SOL',
        MINT: 'So11111111111111111111111111111111111111112'
    },
    {
        LABEL: 'USDC',
        MINT: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'
    },
    {
        LABEL: 'GRAPE',
        MINT: '8upjSpvjcdpuzhfR1zriwg5NXkwDruejqNE9WNbPRtyA'
    },
    {
        LABEL: 'MANGO',
        MINT: 'MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac'
    },
    {
        LABEL: 'UNQ',
        MINT: 'UNQtEecZ5Zb4gSSVHCAWUQEoNnSVEbWiKCi1v9kdUJJ'
    }, 
];
const MAINNET_USDC_MINT = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v');
const MAINNET_GRAPE_MINT = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey('8upjSpvjcdpuzhfR1zriwg5NXkwDruejqNE9WNbPRtyA');


/***/ })

};
;