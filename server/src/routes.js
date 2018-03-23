/* eslint-disable */

let AuthenticationController = require('./controllers/AuthenticationController')
let AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
	app.post('/register', 
		AuthenticationControllerPolicy.register,
		AuthenticationController.register)

	app.post('/login', 
		AuthenticationController.login)
}