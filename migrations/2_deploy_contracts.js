var AuctionPictures = artifacts.require('./AuctionPictures.sol');

module.exports = function(deployer) {
    deployer.deploy(AuctionPictures);
};