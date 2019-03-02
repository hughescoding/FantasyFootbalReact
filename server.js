const express = require('express');
const routes = require("./routes");
// const bodyParser = require('body-parser');
// const customAuthMiddleware = require('./middleware/custom-auth-middleware');
const path = require('path');
// const cookieParser = require('cookie-parser');
const db = require("./models");
const app = express();
require('dotenv').config()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static("public"));

// use the cookie-parser to help with auth token, 
// it must come before the customAuthMiddleware
// app.use(cookieParser());
// app.use(customAuthMiddleware);


if (process.env.NODE_ENV === "production") {
  console.log("production")
    app.use(express.static("client/build"));
  } else {
    app.use(express.static("client/public"));
  }

// Routes
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(path.join(__dirname, 'index.html')));
// });
app.use(routes);


var syncOptions = { force: false};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "development") {
    syncOptions.force = true;
  }
  


const PORT = process.env.PORT || 3001;

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