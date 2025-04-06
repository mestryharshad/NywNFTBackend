const mongoose = require('mongoose');

const buyingHistory = new mongoose.Schema({
  tokenId: { type: String, required: true },
  buyerAddress: { type: String, required: true },
  sellerAddress: { type: String, required: true },
  price: { type: Number, required: true },
  contractAddress: { type: String, required: true },
  transactionHash: { type: String, required: true },
  quantity: { type: Number, required: true },
  buyDate: { type: Date, default: Date.now },
}, { versionKey: false });


const sellHistory = new mongoose.Schema({
  tokenId: { type: String, required: true },
  sellerAddress: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  contractAddress: { type: String, required: true },
  transactionHash: { type: String, required: true },
  quantity: { type: Number, required: true },
  saleDate: { type: Date, default: Date.now },
}, { versionKey: false });

const nftCreateHistory = new mongoose.Schema({
  tokenId: { type: String, required: true },
  ownerAddress: { type: String, required: true },
  contractAddress: { type: String, required: true },
  transactionHash: { type: String, required: true },
  quantity: { type: Number, required: true },
}, { versionKey: false });

const BuyHistory = mongoose.model('BuyingHistory', buyingHistory);
const SellHistory = mongoose.model('SellingHistory', sellHistory);
const NftCreateHistory = mongoose.model('NftCreateHistory', nftCreateHistory);
module.exports = { BuyHistory, SellHistory, NftCreateHistory };
