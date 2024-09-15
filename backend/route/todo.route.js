import express from "express"
import { createUser } from "../controller/todo.controller.js"

const router = express.router()

app.post("/create", createUser)

export default router;