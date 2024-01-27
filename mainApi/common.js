const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../main/constant');

module.exports = {
    checkToken: async (token) => {
        try {
            if (!token || token.length < 10) {
                throw new Error('Invalid user token.');
            }
            const decoded = jwt.verify(token, JWT_SECRET);

            if (!decoded.handle) throw new Error('Invalid token');
            else return decoded.handle;
        } catch (error) {
            return new Error(error.message);
        }
    },
};
