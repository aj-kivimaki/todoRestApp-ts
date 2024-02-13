"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todoModel_1 = __importDefault(require("../models/todoModel"));
const createTodo = async (req, res, next) => {
    try {
        const data = req.body;
        const todo = await todoModel_1.default.create(data);
        return res
            .status(201)
            .json({ message: "Created the todo.", createdTodo: todo });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.createTodo = createTodo;
const getTodos = async (req, res, next) => {
    const todos = await todoModel_1.default.find({});
    res.json({ todos: todos });
};
exports.getTodos = getTodos;
const updateTodo = async (req, res, next) => {
    const { id } = req.params;
    const data = req.body;
    const todo = await todoModel_1.default.findByIdAndUpdate(id, data);
    if (!todo)
        throw new Error("Could not find todo!");
    res.json({ message: "Todo updated!", updatedTodo: data });
};
exports.updateTodo = updateTodo;
const deleteTodo = async (req, res, next) => {
    const { id } = req.params;
    const todo = await todoModel_1.default.findByIdAndDelete(id);
    if (!todo)
        throw new Error("Could not find todo!");
    res.json({ message: "Todo deleted!" });
};
exports.deleteTodo = deleteTodo;
