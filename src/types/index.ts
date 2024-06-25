import {
  ColumnType,
  Generated,
  Insertable,
  JSONColumnType,
  Selectable,
  Updateable,
} from 'kysely'

export interface AppDatabase {
  url: string,
  authToken: string,
}

export interface Database {
  editions: EditionsTable
  users: UsersTable
}

export interface EditionsTable {
  id?: Generated<number>
  name: string
  tickets: number
  location: string
  created_at?: ColumnType<Date, string | undefined, never>
}

export interface UsersTable {
  id: Generated<number>
  name: string
  email: string
  created_at: ColumnType<Date, string | undefined, never>
}

export type Editions = Selectable<EditionsTable>
export type NewEdition = Insertable<EditionsTable>
export type EditionUpdate = Updateable<EditionsTable>

export type Users = Selectable<UsersTable>
export type NewUser = Insertable<UsersTable>
export type UserUpdate = Updateable<UsersTable>