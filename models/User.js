module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        handle: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        institute: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    User.associate = (models) => {
        models.User.hasMany(models.Contest);
        models.User.hasMany(models.Problem);
    };

    return User;
};
