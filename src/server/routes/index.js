// import 'babel-polyfill';
import express from 'express';

import validateRequest from '../middlewares/validateRequest';
import UserController from '../controllers/userController';
import PartyController from '../controllers/partyController';


const route = express.Router();

route.post('/signup', validateRequest, UserController.adminSignUp);
route.post('/parties', validateRequest, PartyController.createParty);
route.get('/parties', PartyController.getParties);


export default route;
