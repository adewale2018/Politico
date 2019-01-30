import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

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
        const file = fs.readFileSync(
          path.join(__dirname, '../datastore/index.json'), 'utf8',
        );
        const db = JSON.parse(file);
        db.party.push(newInstance);
        fs.writeFileSync(
          path.join(__dirname, '../datastore/index.json'),
          JSON.stringify(db), (err) => {
            if (err) return;
          },
        );
        resolve(newInstance);
      }, 100);
    });
  }
}
