import { uploadToS3 } from "../services/upload.service.js";

export const uploadFile = async (req, res) => {
  try {
    console.log(req);
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // const result = await uploadToS3(file);

    res.status(200).json({
      message: "File uploaded successfully",
      data: file,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
