import { LibsqlDialect } from '@libsql/kysely-libsql'
import { Kysely } from 'kysely'
import { Database } from '../types'


function AppDB(authToken: string) {
  return new Kysely<Database>({
    dialect: new LibsqlDialect({
      url: 'libsql://vix-jsvix.turso.io',
      authToken,
    })
  })
}

export { AppDB }