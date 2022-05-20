// Imports
import { Sequelize } from 'sequelize-typescript'
import { User, Post, Comment, Follow, Habit, Like, Task } from '../models/index'

// Database Settings -> Parameters: (database, , Post, Comment, Follow, Habit, Like, Taskname, password, {options})
const connection = new Sequelize('habitika_main', 'habitika', 'Habitika1928#', {
  dialect: 'mysql',
  host: 'mysql-habitika.alwaysdata.net',
  logging: false,
  models: [User, Post, Comment, Follow, Habit, Like, Task]
})

export default connection
