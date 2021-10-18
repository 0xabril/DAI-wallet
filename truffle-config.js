require('babel-register');
require('babel-polyfill');

// module.exports = {
//   networks: {
//     development: {
//       host: "127.0.0.1",
//       port: 7545,
//       network_id: "*" // Match any network id
//     },
//   },
//   contracts_directory: './src/contracts/',
//   contracts_build_directory: './src/abis/',
//   compilers: {
//     solc: {
//       optimizer: {
//         enabled: true,
//         runs: 200
//       }
//     }
//   }
// }

var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "assist unhappy salmon news normal train vote link goat follow cable agree";

module.exports = {
  networks: {
   development: {
    host: "127.0.0.1",
    port: 8545,
    network_id: "*"
   },
   rinkeby: {
       provider: function() { 
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/321b4c966f6f4333b1b8bd1743154231");
       },
       network_id: 4,
       gas: 4500000,
       gasPrice: 10000000000,
       skipDryRun: true
   }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/'
 };