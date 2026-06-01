import express from "express";
import cors from "cors";
import uploadRoutes from "./src/routes/upload.routes.js";
import fileRoutes from "./src/routes/file.routes.js";
import authRoutes from "./src/routes/auth.router.js";

const app = express();

// Enable CORS for all routes
app.use(cors());

// Body parser middleware
app.use(express.json());

app.use("/api/v1/upload", uploadRoutes);
app.use("/api/v1/files", fileRoutes);
app.use("/api/v1/auth", authRoutes);

export default app;
