import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import route from './routes';


dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

app.use('/', route);

app.listen(process.env.PORT, () => console.log(
    `Your Server is connected and running on PORT ${process.env.PORT}`
));
