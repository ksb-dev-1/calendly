// import { neon } from "@neondatabase/serverless";
// import "dotenv/config";
// import { drizzle } from "drizzle-orm/neon-http";
// if (!process.env.DATABASE_URL) {
//   throw new Error("DATABASE_URL is not defined");
// }
// const sql = neon(process.env.DATABASE_URL);
// export const db = drizzle({
//   client: sql,
// });
import { Pool } from "@neondatabase/serverless";
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-serverless";

import * as schema from "./schema";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
export const db = drizzle({ client: pool, schema });
