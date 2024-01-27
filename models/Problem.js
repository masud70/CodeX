module.exports = (sequelize, DataTypes) => {
    const Problem = sequelize.define('Problem', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        time: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        memory: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    Problem.associate = (models) => {
        models.Problem.belongsTo(models.User);
        models.Problem.hasMany(models.TestCase);
        models.Problem.belongsToMany(models.Contest, {
            through: models.Contest_Problem,
        });
    };

    return Problem;
};
