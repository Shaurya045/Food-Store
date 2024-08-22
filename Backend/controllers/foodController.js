import { Food } from "../models/food.model.js";
import fs from "fs";

// addItem
const addItem = async (req, res) => {
  const { name, price, description, category } = req.body;
  let image_filename = `${req.file.filename}`;

  try {
    const food = await Food.create({
      name,
      price,
      description,
      category,
      image: image_filename,
    });
    res.json({ success: true, message: "Food Added Successfully." });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// listItem
const listItem = async (req, res) => {
  try {
    const food = await Food.find({});
    res.json({ success: true, data: food });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// removeItem
const removeItem = async (req, res) => {
  try {
    const food = await Food.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});

    await Food.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addItem, listItem, removeItem };
