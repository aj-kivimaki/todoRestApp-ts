import { RequestHandler } from "express";
import Todo, { TodoModel } from "../models/todoModel";

export const createTodo: RequestHandler = async (req, res, next) => {
  try {
    const data: TodoModel = req.body;
    const todo = await Todo.create(data);

    return res
      .status(201)
      .json({ message: "Created the todo.", createdTodo: todo });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getTodos: RequestHandler = async (req, res, next) => {
  const todos = await Todo.find({});
  res.json({ todos: todos });
};

export const updateTodo: RequestHandler<{ id: string }> = async (
  req,
  res,
  next
) => {
  const { id } = req.params;

  const data: TodoModel = req.body;
  const todo = await Todo.findByIdAndUpdate(id, data);

  if (!todo) throw new Error("Could not find todo!");

  res.json({ message: "Todo updated!", updatedTodo: data });
};

export const deleteTodo: RequestHandler<{ id: string }> = async (
  req,
  res,
  next
) => {
  const { id } = req.params;
  const todo = await Todo.findByIdAndDelete(id);

  if (!todo) throw new Error("Could not find todo!");

  res.json({ message: "Todo deleted!" });
};
