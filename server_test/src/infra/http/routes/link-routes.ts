import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const linkRoutes:FastifyPluginAsyncZod = async server => {
    server.get("links", (request, reply) => {
        return reply.status(200).send({
            data: [
                {
                    id: "1",
                    original_url: "https://google.com",
                    short_url: "https://short.com.br/1",
                },
                {
                    id: "2",
                    original_url: "https://youtube.com",
                    short_url: "https://short.com.br/2",
                }
            ]
        })
    })
    server.post("links", {
        schema: {
            summary: "Create a shortened link",
            body: z.object({
                url: z.url(),
                slug: z.string(),
            }),
            response: {
                201: z.object({linkId: z.string()}),
                409: z.object({message: z.string()}).describe('Shortened link already exists'),
            },
        },
    }, (request, reply) => {
        return reply.status(201).send({ linkId: "1" })
    })
}