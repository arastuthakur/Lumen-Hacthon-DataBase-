const mongoose = require('mongoose');

const stockTransactionSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  transactionType: { type: String, enum: ['IN', 'OUT'], required: true },
  quantity: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('StockTransaction', stockTransactionSchema);
