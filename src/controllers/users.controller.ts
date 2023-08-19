import { Request, Response } from 'express';
import usersService from '../services/users.service';
import mapStatusHTTP from '../utils/mapStatusHttp';

async function userLogin(req: Request, res: Response) {
  const serviceResponse = await usersService.userLogin(req.body);

  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);  
  }
  
  res.status(200).json(serviceResponse.data);
}

export default {
  userLogin,
};