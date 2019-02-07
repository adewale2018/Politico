import Offices from '../models/OfficesModel';
import db from '../datastore';



export default {
  createOffice: async (req, res) => {
    console.log(req.body);
    const{
      type, name, userId
    } = req.body;

    let office;
    try {
      office = await db.query(
        `insert into offices(officename, officetype, user_id)
        values($1, $2, $3)
        RETURNING id, officename, officetype`,
        [name, type, userId]
      )
      return res.status(201).json({
        status: 201,
        data: [office.rows],
        message: 'Office created successfully',
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        data: error,
      });
    }
  },

  getOffices: async (req, res) => {
    let offices;
    try {
      offices = await Offices.getOffices();
      return res.status(200).json({
        status: 200,
        data: offices,
      });
    } catch (error) {
      return  res.status(400).json({
        status: 400,
        data: error,
      });
    }
  },

  getOffice: async (req, res) => {
    try {
      const result = await Offices.getOffice(req.params.id);
      return res.status(200).json({
        status: 200,
        data: result,
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        data: errorr,
      });
    }
  }
}
