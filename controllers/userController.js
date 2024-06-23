import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcrypt';
import data from '../data.js';
import User from '../models/userModal.js';
import { generateToken } from '../utils.js';

export const seedUsers = expressAsyncHandler(async (req, res) => {
    const createdUsers = await User.insertMany(data.users);
    res.send(createdUsers);
});

export const signinUser = expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user.id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user),
            });
        } else {
            res.status(401).send({ message: 'Incorrect password' });
        }
    } else {
        res.status(401).send({ message: 'No user found' });
    }
});

export const signupUser = expressAsyncHandler(async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    });
    const createdUser = await newUser.save();
    res.send({
        _id: createdUser.id,
        name: createdUser.name,
        email: createdUser.email,
        isAdmin: createdUser.isAdmin,
        token: generateToken(createdUser),
    });
});
