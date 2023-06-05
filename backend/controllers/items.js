const Item = require("../models/item");

const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createItem = async (req, res) => {
  const { title, image } = req.body;
  const item = new Item({ title, image });

  try {
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getItems,
  createItem,
};
