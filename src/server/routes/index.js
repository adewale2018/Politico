import express from 'express';

import validateRequest from '../middlewares/validateRequest';
import UserController from '../controllers/userController';


const route = express.Router();

route.get('/', UserController.home);

route.post('/admin/signup', validateRequest, UserController.adminSignUp);


export default route;
