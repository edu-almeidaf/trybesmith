import schemas from './schemas';
import { ProductInputtableTypes } from '../../database/models/product.model';
import { ServiceResponseError } from '../../types/ServiceResponse';

const validateNewProduct = (newProduct: ProductInputtableTypes)
: ServiceResponseError | undefined => {
  if (!newProduct.name) {
    return { status: 'INVALID_DATA', data: { message: '"name" is required' } };
  }
  if (!newProduct.price) {
    return { status: 'INVALID_DATA', data: { message: '"price" is required' } };
  }

  const { error } = schemas.newProductSchema.validate(newProduct);

  if (error) {
    return { status: 'UNPROCESSABLE_ENTITY', data: { message: error.message } };
  }
};

export default {
  validateNewProduct,
};