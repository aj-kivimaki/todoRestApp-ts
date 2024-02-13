"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const todos = [];
const createTodo = (req, res, next) => {
    // const text = req.body.text;
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    todos.push(newTodo);
};
exports.createTodo = createTodo;
