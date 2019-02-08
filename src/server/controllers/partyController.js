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
      const party = await db.query(
        `select * from parties where id = $1`, [req.params.id]
      );
      if(party.rowCount === 0){
        return res.status(404).json({
          status: 404,
          message: 'Party not found',
        });
      }
      return res.status(200).json({
        status: 200,
        data: party.rows,
        message: 'Fetch a specific party successfully',
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
      const result = await db.query(
        `update parties set partyname=$1 where id=$2 
         RETURNING id, partyname`,
        [req.body.name, req.params.id]
      )
      if (result.rowCount === 0) {
        return res.status(404).json({
          status: 404,
          message: 'Party not found',
        })
      }
      return res.status(200).json({
        status: 200,
        data: result.rows,
        message: 'Party name updated successfully',
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        data: error,
      });
    }
  },

  deleteParty: async (req, res) => {
    const deleteQuery = 'DELETE FROM parties WHERE id=$1 returning *';
    try {
      const { rows } = await db.query(deleteQuery, [req.params.id]);
      if(!rows[0]) {
        return res.status(404).json({
          status: 404,
          message: 'Party not found',
        });
      }
        return res.status(200).json({
          status: 200,
          message: 'Party deleted successfully',
        });
    } catch (error) {
      res.status(400).json({
        status: 400,
        data: error,
      });
    }  
  }
};
