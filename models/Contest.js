module.exports = (sequelize, DataTypes) => {
    const Contest = sequelize.define('Contest', {
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
        start: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        supportedLanguage: {
            type: DataTypes.TEXT,
            defaultValue: 'C, C++, JAVA, PYTHON',
        },
        isPublic: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Contest.associate = (models) => {
        models.Contest.belongsTo(models.User);
        models.Contest.belongsToMany(models.Problem, {
            through: models.Contest_Problem,
        });
    };

    return Contest;
};
