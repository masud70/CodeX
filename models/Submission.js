module.exports = (sequelize, DataTypes) => {
    const Submission = sequelize.define('Submission', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        time: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: 'pending',
        },
    });

    Submission.associate = (models) => {
        models.Submission.belongsTo(models.User);
        models.Submission.belongsTo(models.Contest);
        models.Submission.belongsTo(models.Problem);
    };

    return Submission;
};
