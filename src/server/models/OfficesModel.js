import dotenv from 'dotenv';
import db from '../datastore';

dotenv.config();


export default class Offices {
  constructor(id, type, name) {
    this.id = id;
    this.type = type;
    this.name = name;
  }

  save() {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
          const newInstance = {
            id: this.id,
            type: this.type,
            name: this.name,
          };
          db.offices.push(newInstance);
          resolve(newInstance);
      }, 100);
    });
  }
  static createOffices() {
    return db.offices;
  }

  static getOffices() {
    return db.offices;
  }
}