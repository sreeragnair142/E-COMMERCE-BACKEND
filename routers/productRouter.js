import express from 'express';
import { getProducts, seedProducts, getProductById } from '../controllers/productController.js';

const productRoute = express.Router();

productRoute.get('/', getProducts);
productRoute.get('/seed', seedProducts);
productRoute.get('/:id', getProductById);

export default productRoute;
