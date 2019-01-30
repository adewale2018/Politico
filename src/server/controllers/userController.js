import path from 'path';
import fs from 'fs';
import Users from '../models/UsersModel';


const file = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../datastore/index.json'), 'utf8'),
);


export default {

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
      const userModel = new Users(
        id, firstname, email, lastname,
        othername, phoneNumber, passportUrl, password, isAdmin,
      );
      user = await userModel.save();
      return res.status(201).json({
        status: 201,
        data: [user],
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        data: error,
      });
    }
  },
};
