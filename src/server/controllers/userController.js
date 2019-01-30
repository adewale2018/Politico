import path from 'path';
import fs from 'fs';
import Models from '../models';


const file = JSON.parse(fs.readFileSync(path.join(__dirname, '../datastore/index.json'), 'utf8'));

export default {

  home: async (req, res) => res.status(200).json({ home: 'Welcome home', success: true }),

  adminSignUp: async (req, res) => {
    const {
      firstname, lastname, othername, email,
      phoneNumber, passportUrl, password,
    } = req.body;
    let id = file.users.length;
    id += 1;
    const isAdmin = false;
    let user;
    try {
      const userModel = new Models(id, firstname, email, lastname, othername, phoneNumber, passportUrl, password, isAdmin);
      user = await userModel.save();
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
