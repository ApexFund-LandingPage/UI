const TEST_CONFIG = {

    CHAIN_ID: 97,
    RPC:"https://data-seed-prebsc-1-s1.binance.org:8545",
    "HolobetToken": "0x3fa0df8fd2D1826f3daD44d01f6E712d64d32617",
    "HBTReferral": "0xbe1Ea84A6c71ee5391Ea14Cd007075112935067f",
    "USDC": "0x662BEbE771A2553264dE49667c632c6F132391e3",
    "HBTPresale": "0xDF5Ecc32574D36514Be96D936f9d5280efEdd20F",
    "HBTVaultStrategy": "0xadE7Ccf538D46B4fB6B512953Da9d2a28cC336A9",
    "HBTVault": "0xc658E962Ee39bA76C267e511aeFe1F991AC342E2",
    "HBTMasterChef": "0x073728e01516EAC9Fd8Bc77718018A7Af7A96e37",
    "RewardManager": "0xCd7BB631F26d9D782306F80800740C3790EB0D65",
    "xHBTToken": "0x5e1d22e6b51c011462a0716c9b1860C249D2F9F8",
    "HBTLendingStaking": "0xB37AFf7E1828890b5a8f0259d48a893e4D0229Ac",
    "HBTLending": "0xb0058aff4872A4FEd31ffC7132572F878409897A",
    "PriceBacking": "0x703f9F5f7528b9b9e682B5C23968A1890fB857B3",
    MAX_PRESALE_TOKENS: 10000,
    DEFAULT_REFERRER:"0xa43337cbA0824B6034dF772473bCb64374C34148"

}


const MAIN_CONFIG = {
    
}

const CONFIG = {
    ...TEST_CONFIG,
    // ...MAIN_CONFIG
    ONE_MONTH: 2.628e+6,
    ONE_DAY: 10
    // ONE_DAY:86400

}





export default CONFIG;