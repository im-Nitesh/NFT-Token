/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};

//0x955b5244a60C7Cbce462E4B50C601B58A446E06d

//0xfc64c51cea9a1d61512518143a3e915be5c10d13f217c3dcd123c7804727effa 

//0x12fcc566b2db044cc99839d458bab7511a59946630f7c97f604313894c3ab1e2