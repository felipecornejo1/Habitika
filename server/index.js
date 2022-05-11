// Library Imports
import express from 'express'
import path from 'path';
import sequelize from 'sequelize';
import cors from 'cors';
import bodyParser from 'body-parser';
import methodOverride from 'method-override'
//Routes Imports
import mainRoutes from './routes/mainRoutes.js'

// App - Server
const app = express();
app.listen(3031, () => {
    console.log('API corriendo en el puerto 3030');
});

// Carpeta Public
const __dirname = path.resolve();
const publicPath = path.join(__dirname, './public');
app.use(express.static(publicPath));

//Cors
app.use(cors());

// Put & Delete Requests
app.use(methodOverride('_method'));

app.use('/', mainRoutes);