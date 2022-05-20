"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = require("../models/User");
// Database Settings -> Parameters: (database, username, password, {options})
const connection = new sequelize_typescript_1.Sequelize('habitika_main', 'habitika', 'Habitika1928#', {
    dialect: 'mysql',
    host: 'mysql-habitika.alwaysdata.net',
    logging: false,
    models: [User_1.User]
});
exports.default = connection;
