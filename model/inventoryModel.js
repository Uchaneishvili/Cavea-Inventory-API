const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
});

const inventory = mongoose.model("Inventory", inventorySchema);
module.exports = inventory;
