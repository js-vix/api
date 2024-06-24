-- js-vix

-- Event table
CREATE TABLE IF NOT EXISTS editions (
    id VARCHAR PRIMARY KEY,
    name VARCHAR NOT NULL,
    tickets INTEGER NOT NULL,
    scheduled_date TEXT,
    place TEXT NOT NULL,
    created_at INTEGER DEFAULT(CAST(UNIXEPOCH() AS INT)),
    updated_at INTEGER DEFAULT(CAST(UNIXEPOCH() AS INT))
);

-- users table
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR PRIMARY KEY,
    name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    created_at INTEGER DEFAULT(CAST(UNIXEPOCH() AS INT)),
    updated_at INTEGER DEFAULT(CAST(UNIXEPOCH() AS INT))
);

-- indices
CREATE INDEX IF NOT EXISTS idx_edition_name on editions(name);
CREATE INDEX IF NOT EXISTS idx_user_name on users(name);