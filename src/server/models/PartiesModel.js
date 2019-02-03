import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import db from '../datastore';

dotenv.config();


export default class Parties {
  constructor(id, name, userId, hqAddress, logoUrl) {
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
  static getParties(){
    return db.party;
  }

  static getParty(id) {
    const party = db.party.filter(item => item.id == id);
    return party;
  }

  static patchParty(id, name) {
    let party = db.party.filter(item => item.id == id);
    const index = db.party.indexOf(party[0]);
    party[0].name = name;
    db.party[index] = party;
    return party;
  }

  static deleteParty(id) {
    let party = db.party.filter(item => item.id == id);
    db.party.map((item) => {
      const index = db.party.indexOf(item);
      if(db.party[index] === party[0]) {
        db.party.splice(item, 1);
      }
    });
    return {
      message: 'Party deleted successfully'
    }
  }
}
