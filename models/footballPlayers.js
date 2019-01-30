module.exports = function(sequelize, DataTypes) {
    var FootballPlayers = sequelize.define("FootballPlayers", {
      
      rank: {
        type: DataTypes.INTEGER,
      },
      player_name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      nfl_team: {
        type: DataTypes.STRING,
        allowNUll: false,
      },
      position_rank: {
        type: DataTypes.STRING,
      },
      player_position: {
        type: DataTypes.STRING,
        allowNUll: false,
      },
      bye_week: {
          type: DataTypes.INTEGER,
      },
      draft_avg: {
          type: DataTypes.DECIMAL(4,1),
      },
      TeamId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      }

    });


    return FootballPlayers;
  }