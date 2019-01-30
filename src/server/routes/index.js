import express from 'express';

import validateRequest from '../middlewares/validateRequest';
import UserController from '../controllers/userController';
import PartyController from '../controllers/partyController';



const route = express.Router();

route.get('/', UserController.home);

route.post('/signup', validateRequest, UserController.adminSignUp);
route.post('/parties', validateRequest, PartyController.createParty);


export default route;
