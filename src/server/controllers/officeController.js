import Offices from '../models/OfficesModel';
import db from '../datastore';



export default {
  createOffice: async (req, res) => {
    const{
      type, name
    } = req.body;
    let id = db.offices.length;
    id += 1;
    let office;
    try {
      const officeModel = new Offices(
        id, type, name,
      );
      office = await officeModel.save();
      return res.status(201).json({
        status: 201,
        data: [office],
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
