"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
const User_1 = require("../database/models/User");
// Index
const index = (req, res) => {
    User_1.User.findAll().then(users => res.json(users));
};
exports.index = index;
