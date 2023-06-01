import { Order } from '../types/Order';
import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';

async function getOrders(): Promise<Order[]> {
  const allOrders = await OrderModel.findAll({ include: 
    { model: ProductModel,
      as: 'productIds',
      attributes: { exclude: ['orderId', 'name', 'price'] } } });  
  const allOrdersValues = allOrders.map((order) => order.dataValues);  
  const ordersValues = allOrdersValues.map((order) => {
    if (order.productIds) {
      const result = (order.productIds.map((product) => 
        Object.values(product)[0]));
      const allIds = result.map((id) => id.id);
      return { id: order.id,
        userId: order.userId,
        productIds: allIds,
      };
    }
    return order;
  });      
  return ordersValues;
}

// async function addOrder(product: OrderInputtableTypes): Promise<Order> {
//   const newProduct = await ProductModel.create(product);
//   return newProduct.dataValues;
// }

export default {
  getOrders,
};