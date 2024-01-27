const { JWT_SECRET } = require('../main/constant');
const db = require('../models');
const jwt = require('jsonwebtoken');
const { checkToken } = require('./common');

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

    createProblem: async ({ title, time, memory, token }) => {
        try {
            const UserHandle = await checkToken(token);

            const result = await db.Problem.create({
                title,
                time,
                memory,
                UserHandle,
            });

            if (result) {
                return {
                    status: true,
                    message: 'Problem created successfully.',
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

    getUserContest: async ({ token }) => {
        try {
            const UserHandle = await checkToken(token);
            const result = await db.Contest.findAll({ where: { UserHandle } });
            return {
                status: true,
                contests: result,
            };
        } catch (error) {
            return {
                status: false,
                message: error.message,
            };
        }
    },

    getUserProblem: async ({ token }) => {
        try {
            const UserHandle = await checkToken(token);
            const result = await db.Problem.findAll({ where: { UserHandle } });
            return {
                status: true,
                problems: result,
            };
        } catch (error) {
            return {
                status: false,
                message: error.message,
            };
        }
    },

    getContestProblem: async ({ ContestId }) => {
        try {
            const result = await db.Problem.findAll({ where: { ContestId } });
            return {
                status: true,
                problems: result,
            };
        } catch (error) {
            return {
                status: false,
                message: error.message,
            };
        }
    },
};
