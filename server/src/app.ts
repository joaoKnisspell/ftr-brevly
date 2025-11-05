import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'

export const buildApp = () => {
    const app = fastify({ logger: true });
    app.register(fastifyCors, {
        origin: '*',
    })
    return app;
}