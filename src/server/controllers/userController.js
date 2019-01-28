import path from 'path';
import fs from 'fs';
import Models from '../models';


const file = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/index.json'), 'utf8'));

export default {

  home: async (req, res) => res.status(200).json({ home: 'Welcome home', success: true }),

  adminSignUp: async (req, res) => {
    const {
      firstname, lastname, othername, email,
      phoneNumber, password, passportUrl } = req.body;
    // const { passportUrl } = req.file;
    // console.log(passportUrl, '>>>>>>>');

    let userId = file.users.length;
    userId += 1;
    let user;
    let passport;
    // try {
    //   passport = await helpers.cloudinary(passportUrl);
    //   console.log(passport, '>>>>>>');
    // } catch (error) {
    //   console.log(error);
    // }

    try {
      user = new Models(
        userId, firstname, lastname, othername,
        email, phoneNumber, passport, password,
      );
      user = await user.save();
      return res.status(201).json({
        status: true,
        data: [user],
      });
    } catch (error) {
      return res.status(400).json({
        status: false,
        data: 'error',
      });
    }
  },
};
