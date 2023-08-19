import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';
import { ServiceResponse } from '../types/ServiceResponse';

const getOrders = async (): Promise<ServiceResponse<Order[]>> => {
  const orders = await OrderModel.findAll({
    include: {
      model: ProductModel,
      as: 'productIds',
      attributes: ['id'],
    },
  });

  const newOrders = orders.map(({ dataValues }) => ({
    id: dataValues.id,
    userId: dataValues.userId,
    productIds: dataValues.productIds?.map((product) => product.id).sort(),
  }));
  
  return { status: 'SUCCESSFUL', data: newOrders as Order[] };
};

export default {
  getOrders,
};