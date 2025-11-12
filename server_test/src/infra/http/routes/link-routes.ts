import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";
import { db } from "../../db";
import { schema } from "../../db/schemas";

export const linkRoutes:FastifyPluginAsyncZod = async server => {
    server.get("/links", (request, reply) => {
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

    server.post("/links", async (request, reply) => {
        // const createLinkSchema = z.object({
        //     url: z.url("URL inválida"),
        //     slug: z.string().min(3).max(6).regex(/^[a-zA-Z0-9]+$/, 'O link encurtado pode conter apenas letras e números'),
        // })

        // const parseResult = createLinkSchema.safeParse(request.body)

        // if(!parseResult.success){
        //     return reply.status(400).send({ error: parseResult.error.flatten() })
        // }

        await db.insert(schema.links).values({
            url: 'https://google.com',
            slug: 'google',
        })

        return reply.status(201).send({ message: 'Link criado com sucesso' })
    })
}