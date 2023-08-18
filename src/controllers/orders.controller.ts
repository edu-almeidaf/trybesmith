import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const getOrders = async (_req: Request, res: Response) => {
  const ServiceResponse = await ordersService.getOrders();

  res.status(200).json(ServiceResponse.data);
};

export default {
  getOrders,
};