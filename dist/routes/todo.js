"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_1 = require("../controllers/todo");
const router = (0, express_1.Router)();
router.post("/", todo_1.createTodo);
router.get("/");
router.patch("/:id");
router.delete("/:id");
exports.default = router;