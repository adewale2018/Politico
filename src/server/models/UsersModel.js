import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import db from '../datastore/index';

dotenv.config();


export default class Users {

  static createUser(request) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        db.none('insert into users(firstname, email, lastname, othername, phoneNumber, passportUrl, isAdmin, pass) values(${firstname}, ${email}, ${lastname}, ${othername}, ${phoneNumber}, ${passportUrl}, ${isAdmin}, ${password})', request)
        resolve({
          data: 'User created successfully',
          success: true,
        });
      }, 100);
      reject({ error: 'Error in pushing to db' })
    })
  }
}
