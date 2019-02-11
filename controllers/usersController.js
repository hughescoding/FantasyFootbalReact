const db = require("../models");
const bcrypt = require('bcrypt');
const { User } = require('../models');

// Defining methods for the userController
module.exports = {
  findAll: function (req, res) {
    db.FootballPlayers
      .findAll(req.query)
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

  login: async function (req, res) {
    const { email, password } = req.body;
    // if the username / password is missing, we use status code 400
    // indicating a bad request was made and send back a message
    if (!email || !password) {
      return res.status(400).send(
        'Request missing username or password param'
      );
    }
    try {
      let user = await Users.authenticate(email, password)
  
      user = await user.authorize();
  
      return res.json(user);
  
    } catch (err) {
      return res.status(400).send('invalid username or password');
    }
  
  }
  

  }
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

