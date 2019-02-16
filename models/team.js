module.exports = function(sequelize, DataTypes) {
    var Team = sequelize.define("Team", {
      
      name: {
        type: DataTypes.STRING,
      }

    });
    Team.associate = function(models) {
      // We're saying that a user has one team
     
      Team.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
          default: 1
        }
      
      });

    //   Team.hasMany(models.FootballPlayers, {
    //     foreignKey: {
    //       allowNull: true,
    //       default: null
    //     }
    //   });
    }
    return Team;
  }
