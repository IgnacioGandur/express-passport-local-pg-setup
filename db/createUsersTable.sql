CREATE TABLE IF NOT EXISTS "users" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY,
    "username" VARCHAR(255) UNIQUE NOT NULL,
    "password" VARCHAR(255),
    PRIMARY KEY ("id")
);
