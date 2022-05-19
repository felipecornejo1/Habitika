"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Library Imports
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
// import sequelize from 'sequelize';
const cors_1 = __importDefault(require("cors"));
// import bodyParser from 'body-parser';
const method_override_1 = __importDefault(require("method-override"));
// Routes Imports
const mainRoutes_1 = __importDefault(require("./routes/mainRoutes"));
// Setting variables
const app = (0, express_1.default)();
const PORT = 3001;
// App - Server
app.listen(process.env.PORT ?? PORT, () => {
    console.log('--------Habitika API--------');
    console.log(`Server running on port ${PORT}`);
});
// Carpeta Public
const publicPath = path_1.default.join(__dirname, './public');
app.use(express_1.default.static(publicPath));
// Cors
app.use((0, cors_1.default)());
// Put & Delete Requests
app.use((0, method_override_1.default)('_method'));
app.use('/', mainRoutes_1.default);
