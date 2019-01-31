import path from 'path';
import fs from 'fs';
import Parties from '../models/PartiesModel';
import db from '../datastore';


export default {
  createParty: async (req, res) => {
    const {
      userId, name, hqAddress, logoUrl,
    } = req.body;
    let id = db.party.length;
    id += 1;
    let party;
    try {
      const partyModel = new Parties(
        id, name, userId, hqAddress, logoUrl,
      );
      party = await partyModel.save();
      return res.status(201).json({
        status: 201,
        data: [party],
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        data: error,
      });
    }
  },

  getParties: async (req, res) => {
    let parties;
    try {
      parties = await db.party;
      return res.status(200).json({
        status: 200,
        data: parties,
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        data: error,
      });
    }
  },

  getParty: async (req, res) => {
    let party;
    try {
      party = new Parties(req.params.id);
      const result = await party.getParty();
      return res.status(200).json({
        status: 200,
        data: result,
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        data: error,
      });
    }
    
  },

  editParty: async (req, res) => {
    let party;
    try {
      party = new Parties(req.params.id, req.body.name);
      const result = await party.patchParty();
      return res.status(200).json({
        status: 200,
        data: result,
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        data: error,
      });
    }
  },
};
