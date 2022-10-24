require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remind modify grace narrow furnace suspect'; 
let testAccounts = [
"0x851a07f676a749a2e7a74b5428d3d527fdb7af3d15efb5675e5e5352765fb8c4",
"0xe96666e484215b6eb6050f7486cad67416fd26cc601b77aa941a84bce3a71f98",
"0xb4412b00e8fe11d2dbfdc1879986eabb743b1b64955f82143e3b8d5833e9f6d4",
"0x71a324fa18a870b6fcf0cb5175b3c817675b6770927315eb25e4307fb088b2a7",
"0xc3973d638b72bab9c515ea7bb5ddd2993338752c0a6f048f388b24dae728a0a1",
"0xa7564b804b2900e5e9f7a2989136b242e8362a064a55ba63f2a9cb0317053490",
"0x11366150ca4aa99d6b2006ab2f4a6378679bd882f45832b224f89fd6fabaea82",
"0x6ab1d3a2d38cbcc744f336c5a38e9e6b35bf8597718f1112543823f7d7776bfa",
"0xbb4fa3655b986e6866a1a4ef3bf301a893d1afe9d5d2db2d224803b6654c7578",
"0x5d40b054708324262485cc23881dd68da123b3e175c0cfcac7152d2d757cbeb0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

