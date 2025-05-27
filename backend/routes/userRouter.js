import express from 'express'
import { Login, register } from '../controllers/userController.js';

const userRouter = express.Router();


userRouter.post('/register',register)
userRouter.post('/login',Login)

export default userRouter;