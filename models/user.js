// const bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
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
  
    // },      {
    //   freezeTableName: true,
    //   instanceMethods: {
    //       generateHash(password) {
    //           return bcrypt.hash(password, bcrypt.genSaltSync(8));
    //       },
    //       validPassword(password) {
    //           return bcrypt.compare(password, this.password);
    //       }
    //   }
    });

    
    // Users.associate = function(models) {
    //   Users.hasMany(models.AuthToken);
    // };

    // Users.authenticate = async function(email, password) {

    //   const user = await Users.findOne({ where: { email } });
  
    //   // bcrypt is a one-way hashing algorithm that allows us to 
    //   // store strings on the database rather than the raw
    //   // passwords. Check out the docs for more detail
    //   if (bcrypt.compareSync(password, user.password)) {
    //     return user.authorize();
    //   }
  
    //   throw new Error('User/Password are incorrect');
    // }
  
    // // in order to define an instance method, we have to access
    // // the User model prototype. This can be found in the
    // // sequelize documentation
    // Users.prototype.authorize = async function () {
    //   const { AuthToken } = sequelize.models;
    //   const user = this
  
    //   // create a new auth token associated to 'this' user
    //   // by calling the AuthToken class method we created earlier
    //   // and passing it the user id
    //   const authToken = await AuthToken.generate(this.id);
  
    //   // addAuthToken is a generated method provided by
    //   // sequelize which is made for any 'hasMany' relationships
    //   await user.addAuthToken(authToken);
  
    //   return { user, authToken }
    // };
  
  
    // Users.prototype.logout = async function (token) {
  
    //   // destroy the auth token record that matches the passed token
    //   sequelize.models.AuthToken.destroy({ where: { token } });
    // };
  

    // Users.associate = function(models) {
    //   // We're saying that a user has one team
    //   // A Post can't be created without an Author due to the foreign key constraint
    //   Users.hasOne(models.Teams, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
    return User;
  }