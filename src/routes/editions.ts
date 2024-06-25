import { Hono } from 'hono'
import { createEdition, getEditions, getEdition, updateEdition } from "../repository/EditionsRepository";

const app = new Hono()

app
  .get("/", getEditions)
  .get("/:id", getEdition)
  .post("/", createEdition)
  .put("/:id", updateEdition)

export default app