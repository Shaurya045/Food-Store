import express from "express";
import multer from "multer";
import { addItem, listItem, removeItem } from "../controllers/foodController.js";

const foodRouter = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addItem);

foodRouter.get("/list", listItem);

foodRouter.post("/remove", removeItem);

export default foodRouter;
