import { Router } from 'express';
import productIdsValidation from '../middlewares/productIdsValidation';
import userIdValidation from '../middlewares/userIdValidation';
import orderController from '../controllers/order.controller';
import authMiddleware from '../middlewares/authValidation';

const orderRouter = Router();

orderRouter.get('/orders', orderController.getOrders);
orderRouter.post(
  '/orders',
  authMiddleware,
  productIdsValidation,
  userIdValidation,
  orderController.addOrder,
);

export default orderRouter;