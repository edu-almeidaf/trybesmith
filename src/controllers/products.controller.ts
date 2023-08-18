import { Request, Response } from 'express';
import productsService from '../services/products.service';
import mapStatusHTTP from '../utils/mapStatusHttp';

const getProducts = async (_req: Request, res: Response) => {
  const ServiceResponse = await productsService.getProducts();

  res.status(200).json(ServiceResponse.data);
};

const createProduct = async (req: Request, res: Response) => {
  const ServiceResponse = await productsService.createProduct(req.body);

  if (ServiceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(ServiceResponse.status)).json(ServiceResponse.data);
  }

  res.status(201).json(ServiceResponse.data);
};

export default {
  createProduct,
  getProducts,
};