import { Knex } from "knex";

const config: Record<string, Knex.Config> = {
  production: {
    client: "pg",
    connection: {
      connectionString: process.env.PRODUCTION_DATABASE_URL,
    },
    searchPath: "public",
    pool: {
      min: 2,
      max: 10,
    },
    // migrations: {
    //   tableName: "knex_migrations",
    //   directory: "migrations",
    // },
  },
  development: {
    client: "pg",
    connection: {
      connectionString: process.env.PRODUCTION_DATABASE_URL,
    },
    searchPath: "public",
    pool: {
      min: 2,
      max: 10,
    },
    // migrations: {
    //   tableName: "knex_migrations",
    //   directory: "migrations",
    // },
  },
};

export default config;
