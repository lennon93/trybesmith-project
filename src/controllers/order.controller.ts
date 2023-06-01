import { Request, Response } from 'express';
import orderService from '../services/order.service';

async function getOrders(req: Request, res: Response): Promise<Response> {
  const allOrders = await orderService.getOrders();
  return res.status(200).json(allOrders);
}
  
async function addOrder(req: Request, res: Response): Promise<Response> {
  const order = req.body;
  const newOrder = await orderService.addOrder(order);
  return res.status(201).json(newOrder);
}

export default {
  getOrders,
  addOrder,
};