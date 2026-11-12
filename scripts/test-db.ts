import "dotenv/config";

import { db } from "@/db";

async function main() {
  const result = await db.query.user.findMany({
    with: { items: true, collections: true },
    limit: 1,
  });
  console.log(result);
  process.exit(0); // the connection pool keeps the process open otherwise
}

main();
