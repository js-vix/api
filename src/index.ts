import { Hono } from "hono";
import KyselyMiddleware from "./middlewares/kysely.middleware";

type Bindings = {
  TURSO_DB_URL: string;
  TURSO_DB_AUTH_TOKEN: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.use(KyselyMiddleware);

app.get("/editions", async (c) =>
  c.json({
    ...(await (c.get("appDB")).selectFrom("editions").selectAll().executeTakeFirst()),
  })
);

export default app;
