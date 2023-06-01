import bcrypt from 'bcryptjs';
import jwtUtil from '../utils/jwt.utils';
import { ServiceResponse } from '../types/ServiceResponse';
import UserModel from '../database/models/user.model';

type Login = { username: string, password: string }; 
type Token = { token: string };

async function verifyLogin(login: Login): Promise<ServiceResponse<Token>> {
  if (!login.username || !login.password) {
    return { status: 'INVALID_DATA', data: { message: '"username" and "password" are required' } };
  }
  
  const foundUser = await UserModel.findOne({ where: { username: login.username } });

  if (!foundUser || !bcrypt.compareSync(login.password, foundUser.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const { id, username } = foundUser.dataValues;
  const token = jwtUtil.sign({ id, username });

  return { status: 'SUCCESSFUL', data: { token } };
}
export default {
  verifyLogin,
};