const { JWT_SECRET } = require('../main/constant');
const db = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    createUser: async ({ handle, name, institute, password }) => {
        try {
            password = bcrypt.hashSync(password, saltRounds);
            const result = db.User.create({
                handle,
                name,
                institute,
                password,
            });
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
                message: error.message,
            };
        }
    },

    login: async ({ handle, password }) => {
        try {
            const result = await db.User.findByPk(handle);
            if (result && bcrypt.compareSync(password, result.password)) {
                return {
                    status: true,
                    message: 'Login successful!',
                    user: {
                        name: result.name,
                        handle: result.handle,
                        institute: result.handle,
                        image: 'https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png',
                    },
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
