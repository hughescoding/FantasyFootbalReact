const express = require('express');
const routes = require("./routes");
const db = require("./models")
const app = express();
require('dotenv').config()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  } else {
    app.use(express.static("client/public"));
  }

// Routes
app.use(routes);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "development") {
    syncOptions.force = true;
  }
  


const PORT = process.env.PORT || 5001;

db.sequelize.sync(syncOptions).then(function() {
  console.log("connected to DB")
    app.listen(PORT, function() {
      console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      );
    });
  });
  
//   module.exports = app;