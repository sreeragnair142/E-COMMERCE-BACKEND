import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModal.js';

export const getProducts = expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});

export const seedProducts = expressAsyncHandler(async (req, res) => {
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
});

export const getProductById = expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found' });
    }
});
