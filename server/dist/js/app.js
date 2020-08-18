"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const PORT = process.env.PORT || 8080;
app.get('/', (_, res) => {
    res.status(201).json({ message: "Hi!" });
});
app.listen(PORT, () => {
    console.log('Listen on port: ' + PORT);
});
