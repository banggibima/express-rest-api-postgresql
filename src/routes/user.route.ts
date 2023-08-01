import express from 'express';
import authMiddleware from '../middlewares/auth.middleware';
import {
  createOne,
  findMany,
  findOne,
  removeMany,
  removeOne,
  updateOne,
} from '../controllers/user.controller';

const user = express.Router();

user.get('/', authMiddleware, findMany);
user.get('/:id', authMiddleware, findOne);
user.post('/', authMiddleware, createOne);
user.put('/:id', authMiddleware, updateOne);
user.delete('/', authMiddleware, removeMany);
user.delete('/:id', authMiddleware, removeOne);

export default user;
