/* eslint-disable */
let express = require('express')
let bodyParser = require('body-parser')
let cors = require('cors')
let morgan = require('morgan')
let config = require('./config/config')
let {sequelize} = require('./models')
let app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

// drop all => {force: true}

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Server running in port ${config.port}`)
    })
