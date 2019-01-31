import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import db from '../datastore';

dotenv.config();


export default class Parties {
  constructor(id=6, name = 'Bolu', userId = 4,  
    hqAddress = '12, Inanapaja, Lagos', 
    logoUrl = 'https://www.url.com') {
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

  getParty() {
    const party = db.party.filter(item => item.id == this.id);
    return party;
  }

  patchParty() {
    let party = db.party.filter(item => item.id == this.id);
    const index = db.party.indexOf(party[0]);
    party[0].name = this.name;
    db.party[index] = party;
    return party;
  }
}
