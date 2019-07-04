import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Zaqueu Lima',
    email: 'zaqueulima1@gmail.com',
    password_hash: '123456789',
  });

  res.json(user);
});

export default routes;
