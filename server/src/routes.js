/* eslint-disable */

let AuthenticationController = require('./controllers/AuthenticationController')
let AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
let SongsController = require('./controllers/SongsController')
module.exports = (app) => {
	app.post('/register', 
		AuthenticationControllerPolicy.register,
		AuthenticationController.register)

	app.post('/login', 
		AuthenticationController.login)

	app.get('/songs', 
		SongsController.index)
	app.post('/songs', 
		SongsController.post)
}