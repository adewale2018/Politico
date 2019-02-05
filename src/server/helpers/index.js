// import cloudinary from 'cloudinary';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const jwtSecret = process.env.SECRET_TOKEN;

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.CLOUD_API_SECRET,
// });

export default {

  // cloudinary: file => new Promise((resolve, reject) => {
  //   let result;
  //   try {
  //     result = cloudinary.v2.uploader.upload(file);
  //     resolve(result);
  //   } catch (error) {
  //     reject(error);
  //   }
  // }),

  webtoken: (req, res, next) => {
    const token = req.headers.authorization || req.headers['x-access-token'];
    if (!token) {
      return res.status(403).json({
        error: 'No valid token provided'
      });
    }
    jwt.verify(token, jwtSecret, (error, decoded) => {
      if (error) {
        if (error.message === 'jwt expired') {
          return res.status(401).json({
            error: 'Token has expired'
          });
        }
        return res.status(401).json(error);
      }
      req.decoded = decoded;
      next();
    });
  },

  token: (user) =>  jwt.sign({
    token: { user } },
    process.env.SECRET_TOKEN, { expiresIn: '24h' }
  ),
  
  hashPwd: (password) => {
    const secret = process.env.PASSWORD_SECRET;
    const hash = crypto.createHmac(
      'sha256', secret
      ).update(password).digest('hex');
    return hash;
  }
};
