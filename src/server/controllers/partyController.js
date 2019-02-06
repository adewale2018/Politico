import Parties from '../models/PartiesModel';
import db from '../datastore';


export default {
  createParty: async (req, res) => {
    const {
      userId, name, hqAddress, logoUrl,
    } = req.body;
    let party;
    try {
      party = await db.query(
        `insert into parties(partyname, hqaddress, logourl,user_id)
        values($1, $2, $3, $4) 
        RETURNING id, partyname, hqaddress, logourl`,
        [name, hqAddress, logoUrl, userId]
      )
      return res.status(201).json({
        status: 201,
        data: [party.rows[0]],
        message: 'Party created successfully',
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
      parties = await db.query('select * from parties');
      return res.status(200).json({
        status: 200,
        data: parties.rows,
        message: 'Get parties successfully',
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        data: error,
      });
    }
  },

  getParty: async (req, res) => {
    try {
      const result = await Parties.getParty(req.params.id);
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
    try {
      const result = await Parties.patchParty(req.params.id, req.body.name);
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

  deleteParty: async (req, res) => {
    try {
      const result = await Parties.deleteParty(req.params.id);
      res.status(200).json({
        status: 200,
        data: [result],
      });
    } catch (error) {
      res.status(400).json({
        status: 400,
        data: error,
      });
    }  
  }
};
