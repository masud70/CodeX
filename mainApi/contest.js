const { JWT_SECRET } = require('../main/constant');
const db = require('../models');
const jwt = require('jsonwebtoken');

module.exports = {
    createContest: async ({
        title,
        description,
        start,
        duration,
        password,
        isPublic,
        token,
    }) => {
        try {
            if (!token || token.length < 10) {
                throw new Error('Invalid user token.');
            }
            const decoded = jwt.verify(token, JWT_SECRET);

            if (!decoded.handle) throw new Error('Invalid token');

            const result = await db.Contest.create({
                title,
                description,
                start,
                duration,
                password,
                isPublic,
                UserHandle: decoded.handle,
            });

            console.log(result);

            if (result) {
                return {
                    status: true,
                    message: 'Contest created successfully.',
                };
            } else {
                throw new Error('There was an error.');
            }
        } catch (error) {
            return {
                status: false,
                message: error.message,
            };
        }
    },
};
