module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNUll: false,
        unique: true
      },

  
    });

    // Users.associate = function(models) {
    //   // We're saying that a user has one team
    //   // A Post can't be created without an Author due to the foreign key constraint
    //   Users.hasOne(models.Teams, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
    return Users;
  }