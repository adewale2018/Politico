import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import expressValidator from 'express-validator';

import route from './routes';



dotenv.config();

const app = express();


app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

app.use('/api/v1', route);

app.get('/', (req, res) => res.status(200).json({ home: 'Politico home'}));

app.listen(process.env.PORT, () => console.log(
  `Your Server is connected and running on PORT ${process.env.PORT}`
));

module.exports = app;
