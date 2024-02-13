"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = __importDefault(require("./routes/todo"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoURL = process.env.mongoURL;
const app = (0, express_1.default)();
// body-parser middleware
app.use(express_1.default.json());
app.use("/todos", todo_1.default);
app.listen(3000);
mongoose_1.default
    .connect(mongoURL)
    .then(() => {
    console.log("Database is connected");
    app.listen(4000, () => console.log("Server is serving"));
})
    .catch((error) => console.log(error));
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
