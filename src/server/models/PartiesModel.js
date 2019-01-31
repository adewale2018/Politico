import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import db from '../datastore';

dotenv.config();


export default class Parties {
  constructor(id, userId, name, hqAddress, logoUrl) {
    this.id = id;
    this.userId = userId;
    this.name = name;
    this.hqAddress = hqAddress;
    this.logoUrl = logoUrl; 
  }

  save() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const newInstance = {
          id: this.id,
          userId: this.userId,
          name: this.name,
          hqAddress: this.hqAddress,
          logoUrl: this.logoUrl,
        };
        db.party.push(newInstance);
        resolve(newInstance);
      }, 100);
    });
  }
}
