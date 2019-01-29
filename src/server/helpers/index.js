import cloudinary from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

export default {

  cloudinary: file => new Promise((resolve, reject) => {
    let result;
    try {
      result = cloudinary.v2.uploader.upload(file);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  })
};
