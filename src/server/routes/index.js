import express from 'express';
// import multer from 'multer';

import UserController from '../controllers/userController';


const route = express.Router();

route.get('/', UserController.home);

route.post('/admin/signup', UserController.adminSignUp);


export default route;
