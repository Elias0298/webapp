let fs = require('fs')
let path = require('path')
let Sequelize = require('sequelize')
let config = require('../config/config')
let db = {}

let sequelize = new Sequelize(
	config.db.database,
	config.db.user,
	config.db.password,
	config.db.options
)

fs
    .readdirSync(__dirname)
    .filter((file) => {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach((file) => {
        let model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    })

    Object.keys(db).forEach((modelName) => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db 
