require("@nomiclabs/hardhat-waffle");
require("dotenv").config();


module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.PROJECT_ID}`,
      accounts: [process.env.privatekey]
    },
    mainnet:  {
      url: `https://polygon-mainnet.infura.io/v3/${process.env.PROJECT_ID}`,
      accounts: [`${process.env.privatekey}`]
    }
  },
  solidity: "0.8.4",
};
