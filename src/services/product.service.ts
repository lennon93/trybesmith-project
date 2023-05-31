import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';

async function addProduct(product: ProductInputtableTypes): Promise<Product> {
  const newProduct = await ProductModel.create(product);
  return newProduct.dataValues;
}

async function getProducts(): Promise<Product[]> {
  const allProducts = await ProductModel.findAll();
  console.log(allProducts);
  
  const allProductsValues = allProducts.map((product) => product.dataValues);
  return allProductsValues;
}

export default {
  addProduct,
  getProducts,
};