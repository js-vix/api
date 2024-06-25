import { Hono } from "hono";
import { logger } from 'hono/logger'
import KyselyMiddleware from "./middlewares/kysely.middleware";
import editions from "./routes/editions";

type Bindings = {
  TURSO_DB_URL: string;
  TURSO_DB_AUTH_TOKEN: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.use(KyselyMiddleware);
app.use(logger());

app.route('editions', editions)

export default app;
