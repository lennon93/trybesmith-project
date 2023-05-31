import { Request, Response } from 'express';
import productService from '../services/product.service';

async function addProduct(req: Request, res: Response): Promise<Response> {
  const product = req.body;
  const newProduct = await productService.addProduct(product);
  return res.status(201).json(newProduct);
}

async function getProducts(req: Request, res: Response): Promise<Response> {
  const allProducts = await productService.getProducts();
  return res.status(200).json(allProducts);
}

export default {
  addProduct,
  getProducts,
};