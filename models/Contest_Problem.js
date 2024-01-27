module.exports = (sequelize, DataTypes) => {
    const Contest_Problem = sequelize.define('Contest_Problem', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
    });

    return Contest_Problem;
};
