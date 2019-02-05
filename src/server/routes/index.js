// import 'babel-polyfill';
import express from 'express';

import validateRequest from '../middlewares/validateRequest';
import UserController from '../controllers/userController';
import PartyController from '../controllers/partyController';
import OfficeController from '../controllers/officeController';


const route = express.Router();

route.post('/signup', validateRequest, UserController.signUp);
route.post('/parties', validateRequest, PartyController.createParty);
route.get('/parties', PartyController.getParties);
route.get('/party/:id', PartyController.getParty);
route.patch('/parties/:id/name', validateRequest, PartyController.editParty);
route.delete('/parties/:id', PartyController.deleteParty);
route.post('/offices', validateRequest, OfficeController.createOffice);
route.get('/offices', validateRequest, OfficeController.getOffices);
route.get('/office/:id', validateRequest, OfficeController.getOffice);



export default route;
