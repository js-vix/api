import { Context } from "hono";
import { NewEdition } from "../types";

const getEditions = async (c: Context) =>
  c.json({
    ...(await c.get("appDB").selectFrom("editions").selectAll().execute()),
  });
const getEdition = async (c: Context) =>
  c.json({
    ...(await c
      .get("appDB")
      .selectFrom("editions")
      .where("id", "=", c.req.param("id"))
      .selectAll()
      .executeTakeFirst()),
  });
const createEdition = async (c: Context) =>
  c.json({
    ...(await c
      .get("appDB")
      .insertInto("editions")
      .values((await c.req.raw.json()) as NewEdition)
      .returningAll()
      .executeTakeFirst()),
  });
const updateEdition = async (c: Context) =>
  c.json({
    ...(await c
      .get("appDB")
      .updateTable("editions")
      .set((await c.req.raw.json()) as NewEdition)
      .where("id", "=", c.req.param("id"))
      .returningAll()
      .executeTakeFirst()),
  });

export { createEdition, getEditions, updateEdition, getEdition };
