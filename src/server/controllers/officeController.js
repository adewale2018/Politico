
import db from '../datastore';



export default {
  createOffice: async (req, res) => {
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
        data: [office.rows[0]],
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
      offices = await db.query('select * from offices');
      return res.status(200).json({
        status: 200,
        data: offices.rows,
        message: 'Get political offices successfully',
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
      const result = await db.query(
        `select * from offices where id = $1`, [req.params.id]
      );
      if(result.rowCount === 0) {
        return res.status(404).json({
          status: 404,
          message: 'Office not found',
        })
      }
      return res.status(200).json({
        status: 200,
        data: result.rows,
        message: 'Fetch a particular office successfully',
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        data: errorr,
      });
    }
  }
}
