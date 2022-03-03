const express = require("express");
const mongoose = require("mongoose");
const app = express();

const inventoryModel = require("./model/inventoryModel");

app.use(express.json());

mongoose.connect(
  "mongodb+srv://gigauchaneishvili:password123456@inventory.cisss.mongodb.net/inventory?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.get("/", async (req, res) => {
  const inventory = new inventoryModel({
    name: "test",
    location: "Tbilisi",
    price: 4,
  });

  try {
    await inventory.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
