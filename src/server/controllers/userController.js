import Helpers from '../helpers';
import db from '../datastore';


export default {

 signUp: async (req, res) => {
   const {
    firstName, email, lastName, otherName,
    phoneNumber, passportUrl
  } = req.body;
    const isAdmin = true;
    req.body['isAdmin'] = isAdmin;
    req.body.password = Helpers.hashPwd(req.body.password);
    const { password } = req.body;
    let user;
    try {
      user = await db.query(
        `insert into users(firstname, email, lastname, othername, phoneNumber, passportUrl, isAdmin, pass)
        values($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING id, firstname, email, lastname, othername, phoneNumber, passportUrl, isAdmin`,
        [firstName, email, lastName, otherName, phoneNumber, passportUrl, isAdmin, password]
      );
      const token = Helpers.token(user.rows[0]);
      return res.status(201).json({
        status: 201,
        data: [user.rows[0]],
        message: 'User created successfully',
        token,
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        data: error,
      });
    }
  },

  signIn: async (req, res) => {
    let {
      email, password
    } = req.body;
    password = Helpers.hashPwd(password);
    let user;
    try {
      user = await db.query(
        `select id, email, firstname, lastname from users where email=$1 and pass=$2`,
        [email, password]
      )
      if(user.rowCount === 0){
        return res.status(404).json({
          status: 404,
          message: 'Password or Email is incorrect!',
        });
      } 
      const token = Helpers.token(user.rows[0]);
      return res.status(200).json({
        status: 200,
        data: [user.rows[0]],
        message: 'User signin successfully',
        token,
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        data: error,
      });
    }
  }

};
