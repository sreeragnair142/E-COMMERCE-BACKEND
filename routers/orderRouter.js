import express from 'express';
import { isAuth } from '../utils.js';
import { createOrder, getOrderById, payOrder } from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.post('/', isAuth, createOrder);
orderRouter.get('/:id', isAuth, getOrderById);
orderRouter.put('/:id/pay', isAuth, payOrder);

export default orderRouter;
