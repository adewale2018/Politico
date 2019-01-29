import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import morgan from 'morgan';
// import formidable from 'express-formidable';
import multer from 'multer';

import route from './routes';


dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
// const upload = multer({ dest: 'uploads/' });

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(formidable());

app.use('/api/v1', route);

app.listen(process.env.PORT, () => console.log(
 `Your Server is connected and running on PORT ${process.env.PORT}`
));
