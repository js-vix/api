import { MiddlewareHandler } from 'hono'
import { Kysely } from 'kysely'
import { Database } from '../types'
import { AppDB } from '../db/database'

// Global Context Types
declare module 'hono' {
  interface ContextVariableMap {
    appDB: Kysely<Database>
  }
}

// Global Context Middleware
const KyselyMiddleware: MiddlewareHandler = async (c, next) => {
  c.set('appDB', AppDB(c.env.TURSO_DB_AUTH_TOKEN))

  await next()
}

export default KyselyMiddleware