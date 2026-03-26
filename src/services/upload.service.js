import { S3Client, PutObjectCommand, Bucket$ } from "@aws-sdk/client-s3";
import dotenv from "dotenv";

dotenv.config();

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});

export const uploadToS3 = async (file) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${Date.now()}-${file.originalname}`,
    Body: file.buffer,
    Contenttype: file.mimetype,
  };

  const command = new PutObjectCommand(params);

  await s3.send(command);

  return { fileName: params.Key, bucker: params.Bucket };
};
