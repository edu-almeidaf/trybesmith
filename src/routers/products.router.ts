import { Router } from 'express';
import productsController from '../controllers/products.controller';

const productsRouter = Router();

productsRouter.post('/products', productsController.createProduct);
productsRouter.get('/products', productsController.getProducts);

export default productsRouter;