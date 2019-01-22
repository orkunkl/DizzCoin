var DizzCoin = artifacts.require("DizzCoin");

module.exports = function(deployer) {
    // deployment steps
    deployer.deploy(DizzCoin);
};