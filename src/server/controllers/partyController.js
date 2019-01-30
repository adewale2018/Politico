import path from 'path';
import fs from 'fs';
import Parties from '../models/PartiesModel';


const file = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../datastore/index.json'), 'utf8'),
);

export default {
  createParty: async (req, res) => {
    const {
      userId, name, hqAddress, logoUrl,
    } = req.body;
    let id = file.party.length;
    id += 1;
    let party;
    try {
      const partyModel = new Parties(
        id, userId, name, hqAddress, logoUrl,
      );
      party = await partyModel.save();
      return res.status(201).json({
        status: 201,
        data: [{
          id, name,
        }],
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        data: error,
      });
    }
  },
};
