import path from 'path';
import fs from 'fs';
// import Models from '../models';


const file = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/index.json'), 'utf8'));

export default {

  home: async (req, res) => res.status(200).json({ home: 'Welcome home', success: true }),

  adminSignUp: async (req, res) => {
    const {
      firstname, lastname, othername, email,
      phoneNumber, passportUrl, password,
    } = req.body;
    const id = 2;
    const isAdmin = false; 
    let user;
    try {
      user = await {
        id, firstname, lastname, othername, email, phoneNumber, passportUrl, isAdmin,
      };
      return res.status(201).json({
        status: true,
        data: [user],
      });
    } catch (error) {
      return res.status(400).json({
        status: false,
        data: error,
      });
    }
  },
};
