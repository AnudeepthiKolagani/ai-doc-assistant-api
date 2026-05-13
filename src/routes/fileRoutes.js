import express from "express";
import { getAllFiles } from "../controllers/fileController.js";

const router = express.Router();

router.get("/", getAllFiles);

export default router;
