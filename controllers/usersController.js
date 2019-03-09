const db = require("../models");


// Defining methods for the userController
module.exports = {
  findAll: function (req, res) {
    db.FootballPlayers
      .findAll()
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // findById: function(req, res) {
  //   db.Book
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  create: async function (req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  login: function (req, res) {
    console.log(req.body)
    const {email, password} = req.body
    db.User
      .findOne({ where: {email: email, password: password} })
      .then(dbModel => res.json(dbModel)) 
      .catch(err => res.status(422).json(err));  

      
  },

  loadLocker: function (req, res) {
    let playerid = JSON.parse(req.query.userID).userId
    
    
    db.FootballPlayers
    .findAll({ where: {TeamId: playerid} })
    .then(function(player){
      res.json(player)
    })
  },

  draftPlayer: function(req, res) {
    const {playerId, userId} = req.body
    console.log(userId)
    db.FootballPlayers
      .update({ TeamId: userId },{ where: {id: playerId} })
      // ('success', function (player) {
      //   // Check if record exists in db
      //   if (player) {
      //     player.update({
      //       TeamId: playerId
      //     })
          
        
      .then(function(affectedRows) {
        db.FootballPlayers.findOne({where: {id: playerId}}).then(function(player) {
          res.json(player)
        })
      })
      .catch(err => res.status(422).json(err));
      }
      
      }
      // function(affectedRows) {
        // Project.findAll().then(function(Projects) {
            //  console.log(Projects) 
        // })
    
      // )}
  // update: function(req, res) {
  //   db.Book
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Book
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
    // }