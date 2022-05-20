"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const express_1 = require("express");
const mainController_1 = require("../controllers/mainController");
// Router
const router = (0, express_1.Router)();
// Index
router.get('/', mainController_1.index);
exports.default = router;
