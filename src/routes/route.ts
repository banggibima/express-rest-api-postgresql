import express from 'express';
import { find } from '../controllers/controller';

const route = express.Router();

route.get('/', find);

export default route;
