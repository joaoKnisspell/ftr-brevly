import fastify from "fastify";
import { fastifyCors } from "@fastify/cors";

const server = fastify({ logger: true });

server.register(fastifyCors, {
    origin: "*",
})

server.listen({ port: 3333 }).then(() => {
    console.log("Server Running on PORT: 3333")
})