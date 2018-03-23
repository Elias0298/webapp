module.exports = (sequelize, DataTypes) => {
	let User = sequelize.define('User', {
	    email: {
	      type: DataTypes.STRING,
	      unique: true
	    },
	    password: DataTypes.STRING
	})
	
  return User
}
