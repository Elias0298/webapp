/* eslint-disable */
let AuthenticationController = require('./controllers/AuthenticationController')
let AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
let SongsController = require('./controllers/SongsController')
let BookmarksController = require('./controllers/BookmarksController')

module.exports = (app) => {
	app.post('/register', 
		AuthenticationControllerPolicy.register,
		AuthenticationController.register)

	app.post('/login', 
		AuthenticationController.login)

	app.get('/songs', 
		SongsController.index)
	app.get('/songs/:songId', 
		SongsController.show)
	app.put('/songs/:songId', 
		SongsController.put)
	app.post('/songs', 
		SongsController.post)

	app.get('/bookmarks', 
		BookmarksController.index)
}