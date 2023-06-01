import { Router } from 'express';
import productController from '../controllers/product.controller';
import nameValidation from '../middlewares/nameValidation';
import priceValidation from '../middlewares/priceValidation';

const productRouter = Router();

productRouter.post('/products', nameValidation, priceValidation, productController.addProduct);
productRouter.get('/products', productController.getProducts);

export default productRouter;