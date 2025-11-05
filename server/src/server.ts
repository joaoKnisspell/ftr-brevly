import { fastify } from "fastify";
import { fastifyCors } from '@fastify/cors'
import { linkRoutes } from "./routes/link.routes.ts";

const app = fastify({ logger: true });

app.register(fastifyCors, {
    origin: '*',
})

app.register(linkRoutes)

app.listen({ port: 3333 }).then(() => {
    console.log('🚀 Server running on port: 3333')
}).catch((err) => console.error(err))