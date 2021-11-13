require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave foot filter raise saddle pumpkin hope armed off gift'; 
let testAccounts = [
"0x53d8dd04e1b8b7443adc08eab19221532406666953ff175518a92fe4bee9f3e9",
"0x69ed967623e4cd30fa989785ab3864804095999b64c2b5847949c0d93837ebc4",
"0x9754dfc68314fc55ab443fdd8afc25e691fda18eebdaf0c4a0a78a7a98c215c4",
"0xf75709f942c38066ec34807883012ff52f1555acbed291f824fb22c635c6599a",
"0x0100b012c7377de058955420033bcbee74f2e3f5cba833b6bf7c752dddaa0d55",
"0x16094130923c9ea0c3a70169107d222369cb1883b121870d2c3a9a922b44f7cc",
"0x23004a4f3d5fc382b35432205271b484ec16e471b49b0df7c7403d978aa392f4",
"0xd57cfac27887abf19335d06061f96c70b0795f988f940aae44f2da49cf5ed512",
"0x6fba7271f74358772abb25daf392811d9683908efc317504c70571d29c81faac",
"0x8c01e75d425ed596bc84fac952b0393c851abd827206678c9d29185322393652"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


