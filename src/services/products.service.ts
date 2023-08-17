import ProductModel, {
  ProductInputtableTypes,
  // ProductSequelizeModel,
} from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';
import productValidations from './validations/productValidations';

const createProduct = async (
  product: ProductInputtableTypes,
): Promise<ServiceResponse<Product>> => {
  const error = productValidations.validateNewProduct(product);
  if (error) return error;

  const newProduct = await ProductModel.create(product);
  return { status: 'SUCCESSFUL', data: newProduct.dataValues };
};

export default {
  createProduct,
};