import Joi from 'joi';

interface ProductSchema {
  name: string;
  price: string;
  orderId: string;
}

const newProductSchema = Joi.object<ProductSchema>({
  name: Joi.string().min(3).required(),
  price: Joi.string().min(3).required(),
  orderId: Joi.number(),
});

export default {
  newProductSchema,
};