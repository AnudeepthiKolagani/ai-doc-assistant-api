import express from "express";
import cors from "cors";
import uploadRoutes from "./src/routes/uploadRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/upload", uploadRoutes);

export default app;
