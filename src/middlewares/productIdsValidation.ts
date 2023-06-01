import { NextFunction, Request, Response } from 'express';

async function productIdsValidation(req: Request, res: Response, next: NextFunction) {
  const { productIds } = req.body;
  if (!productIds) {
    return res.status(400).json({ message: '"productIds" is required' });
  }
  if (productIds.length === 0) {
    return res.status(422).json({ message: '"productIds" must include only numbers' });
  }
  if (!Array.isArray(productIds)) {
    return res.status(422).json({ message: '"productIds" must be an array' });
  }
  next();
}

export default productIdsValidation;