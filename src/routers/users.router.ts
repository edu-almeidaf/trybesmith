import { Router } from 'express';
import usersController from '../controllers/users.controller';

const usersRouter = Router();

usersRouter.post('/login', usersController.userLogin);

export default usersRouter;