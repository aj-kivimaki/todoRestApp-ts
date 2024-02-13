import { RequestHandler } from "express";
import { Todo } from "../models/todo";

const todos: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  // const text = req.body.text;
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);
  todos.push(newTodo);
  res.status(201).json({ message: "Create the todo.", createTodo: newTodo });
};
