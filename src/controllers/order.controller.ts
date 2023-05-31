import { Request, Response } from 'express';
import orderService from '../services/order.service';

async function getOrders(req: Request, res: Response): Promise<Response> {
  const allOrders = await orderService.getOrders();
  return res.status(200).json(allOrders);
}
  
export default {
  getOrders,
};