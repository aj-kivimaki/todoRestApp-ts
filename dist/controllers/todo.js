"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const todos = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    todos.push(newTodo);
    res.status(201).json({ message: "Create the todo.", createTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.json({ todos: todos });
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0)
        throw new Error("Could not find todo!");
    todos[todoIndex] = new todo_1.Todo(todos[todoIndex].id, updatedText);
    res.json({ message: "Updated!", updatedTodo: todos[todoIndex] });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0)
        throw new Error("Could not find todo!");
    todos.splice(todoIndex, 1);
    res.json({ message: "Todo deleted!" });
};
exports.deleteTodo = deleteTodo;
