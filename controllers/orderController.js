import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModal.js';

export const createOrder = expressAsyncHandler(async (req, res) => {
    console.log(req.body);
    if (req.body.cartItems.length === 0) {
        res.status(400).send('Cart is empty');
    } else {
        const order = new Order({
            orderItems: req.body.cartItems,
            shippingAddress: req.body.shippingAddress,
            paymentMethod: req.body.paymentMethod,
            itemsPrice: req.body.itemsPrice,
            shippingPrice: req.body.shippingPrice,
            taxPrice: req.body.taxPrice,
            totalPrice: req.body.totalPrice,
            user: req.user._id,
        });
        const createdOrder = await order.save();
        res.status(201).send({ message: 'New order created', order: createdOrder });
    }
});

export const getOrderById = expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
        res.send(order);
    } else {
        res.status(404).send({ message: 'Order Not Found' });
    }
});

export const payOrder = expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
        order.isPaid = true;
        order.paidAt = Date.now();
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.email_address,
        };
        const updatedOrder = await order.save();
        res.send({ message: 'Order paid', order: updatedOrder });
    } else {
        res.status(404).send({ message: 'No Order Found' });
    }
});
