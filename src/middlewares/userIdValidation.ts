import { NextFunction, Request, Response } from 'express';
import UserModel from '../database/models/user.model';

async function userIdValidation(req: Request, res: Response, next: NextFunction) {
  const { userId } = req.body;
  if (!userId) {
    return res.status(400).json({ message: '"userId" is required' });
  }
  if (typeof userId !== 'number') {
    return res.status(422).json({ message: '"userId" must be a number' });
  }
  const foundUser = await UserModel.findOne({ where: { id: userId } });
  if (!foundUser) {
    return res.status(404).json({ message: '"userId" not found' });
  }
  next();
}

export default userIdValidation;