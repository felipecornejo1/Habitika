// Imports
import { Sequelize } from 'sequelize-typescript'
import { User } from '../models/User'

// Database Settings -> Parameters: (database, username, password, {options})
const connection = new Sequelize('database', 'username', 'password', {
  dialect: 'mysql',
  host: 'localhost',
  logging: false,
  models: [User]
})

export default connection
