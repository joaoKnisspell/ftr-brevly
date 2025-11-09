import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { linkRoutes } from "./routes/link.routes.ts";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = fastify({ logger: true });

app.register(fastifyCors, {
  origin: "*",
});

app.register(linkRoutes);

const port = Number(process.env.PORT) || 3333;

app.listen({ port }).then(() => {
  console.log(`🚀 Server running on port: ${port}`);
}).catch(console.error);
