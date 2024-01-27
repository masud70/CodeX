module.exports = (sequelize, DataTypes) => {
    const TestCase = sequelize.define('TestCase', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        input: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        output: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        isSample: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    });

    TestCase.associate = (models) => {
        models.TestCase.belongsTo(models.Problem);
    };

    return TestCase;
};
