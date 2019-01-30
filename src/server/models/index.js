import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();


export default class Models {
  constructor(id, firstname, email, lastname,
    othername, phoneNumber, passportUrl, password, isAdmin) {
    this.id = id;
    this.firstname = firstname;
    this.email = email;
    this.lastname = lastname;
    this.othername = othername;
    this.phoneNumber = phoneNumber;
    this.passportUrl = passportUrl;
    this.password = password;
    this.isAdmin = isAdmin;
  }

  /**
   * @description Method saves users to database
   * @param {null}
   * @return {Object} PhoneNumber
   */
  save() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const newInstance = {
          id: this.id,
          firstname: this.firstname,
          email: this.email,
          lastname: this.lastname,
          othername: this.othername,
          phoneNumber: this.phoneNumber,
          passportUrl: this.passportUrl,
          password: this.password,
          isAdmin: this.isAdmin,
        };
        const file = fs.readFileSync(
          path.join(__dirname, '../datastore/index.json'), 'utf8',
        );
        const db = JSON.parse(file);
        db.users.push(newInstance);
        fs.writeFileSync(
          path.join(__dirname, '../database/index.json'),
          JSON.stringify(db), (err) => {
            if (err) return;
          },
        );
        resolve(newInstance);
      }, 100);
    });
  }
}
