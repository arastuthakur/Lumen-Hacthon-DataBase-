const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  stockLevel: { type: Number, required: true },
  reorderPoint: { type: Number, required: true },
});

module.exports = mongoose.model('Product', productSchema);
