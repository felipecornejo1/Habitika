// Library Imports
import express from 'express'
import path from 'path'
import cors from 'cors'
import { json, urlencoded } from 'body-parser'
import methodOverride from 'method-override'
import connection from './database/config/config'

// Routes Imports
import mainRoutes from './routes/mainRoutes'

// Setting variables
const app = express()
const PORT: number = 3001

// App - Server
app.listen(process.env.PORT ?? PORT, () => {
  console.log('--------Habitika API--------')
  console.log(`Server running on port ${PORT}`)
})

// Body Parser
app.use(json())
app.use(urlencoded({ extended: true }))

// Carpeta Public
const publicPath = path.join(__dirname, './public')
app.use(express.static(publicPath))

// Cors
app.use(cors())

// Put & Delete Requests
app.use(methodOverride('_method'))

// Routes
app.use('/', mainRoutes)

// Connect to Database
connection.sync().then(() => {
  console.log('Database synced successfully')
}).catch((err: any) => {
  console.log('Err', err)
})
