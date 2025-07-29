import { Server } from "@/src/server";

new Server().start().catch((error: unknown) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
