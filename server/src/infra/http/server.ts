import fastify from "fastify";
import { fastifyCors } from "@fastify/cors";
import { hasZodFastifySchemaValidationErrors, jsonSchemaTransform, serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { request } from "http";
import { linkRoutes } from "./routes/link-routes";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";

const server = fastify({ logger: true });

server.setValidatorCompiler(validatorCompiler);
server.setSerializerCompiler(serializerCompiler);

server.setErrorHandler((error, request, reply) => {
    if(hasZodFastifySchemaValidationErrors(error)){
        return reply.status(400).send({
            message: 'Validation error',
            issues: error.validation
        })
    }

    console.log(error)

    return reply.status(500).send({
        message: 'Internal server error'    
    })
})

server.register(fastifyCors, {
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"]
})

server.register(fastifySwagger, {
    openapi: {
        info: {
            title: 'Brevly API',
            version: '1.0.0'
        }
    },

    transform: jsonSchemaTransform
})

server.register(fastifySwaggerUi, {
    routePrefix: '/docs'
})

server.register(linkRoutes)

server.listen({ port: 3333 }).then(() => {
    console.log("Server Running on PORT: 3333")
})