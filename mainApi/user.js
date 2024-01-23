const { JWT_SECRET } = require('../main/constant');
const db = require('../models');
const jwt = require('jsonwebtoken');

module.exports = {
    createUser: async ({ handle, name, password }) => {
        try {
            const result = db.User.create({ handle, name, password });
            if (result) {
                return {
                    status: true,
                    message: 'User created successfully.',
                };
            } else {
                throw new Error('User not created.');
            }
        } catch (error) {
            console.log('User creation error: ', error);
            return {
                status: false,
                message: 'User not created.',
            };
        }
    },
    login: async ({ handle, password }) => {
        try {
            const result = await db.User.findByPk(handle);
            if (result && result.password === password) {
                return {
                    status: true,
                    message: 'Login successful',
                    token: jwt.sign(
                        {
                            handle: result.handle,
                            name: result.name,
                        },
                        JWT_SECRET
                    ),
                };
            } else {
                throw new Error('Invalid handle or password.');
            }
        } catch (error) {
            console.log('Login error: ', error);
            return {
                status: false,
                message: error.message,
            };
        }
    },
};
