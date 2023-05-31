import { Router } from 'express';
import orderController from '../controllers/order.controller';

const orderRouter = Router();

orderRouter.get('/orders', orderController.getOrders);

export default orderRouter;