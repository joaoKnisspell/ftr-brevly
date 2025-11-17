import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";
import { db } from "../../db";
import { schema } from "../../db/schemas";
import { eq } from "drizzle-orm";

const createLinkSchema = z.object({
    url: z.url("URL inválida."),
    slug: z.string().min(4).max(6),
})
  
const linkResponseSchema = z.object({
    id: z.string(),
    url: z.string(),
    slug: z.string(),
})

const errorSchema = z.object({
    error: z.any(),
})

const deleteLinkParamsSchema = z.object({
    id: z.string(),
})


export const linkRoutes:FastifyPluginAsyncZod = async (server) => {
    server.post("/links",   
        {
            schema: {
              summary: "Cria um link encurtado",
              body: createLinkSchema,
              response: {
                201: linkResponseSchema,
                400: errorSchema,
                409: errorSchema,
              },
            },
          }, async (request, reply) => {

        const parsedBody = createLinkSchema.safeParse(request.body)

        if(!parsedBody.success){
            return reply.status(400).send({ error: parsedBody.error.flatten() })
        }

        const { url, slug } = parsedBody.data

        const isLinkExists = await db.query.links.findFirst({
            where: eq(schema.links.slug, slug)
        })

        if(isLinkExists){
            return reply.status(409).send({ error: `Link encurtado já existente. (${slug})` })
        }

        const [created] = await db.insert(schema.links).values({
            url,
            slug
        }).returning()

        return reply.status(201).send(created)

    })

    server.get("/links", {
        schema: {
            summary: "Busca todos os links",
            response: {
                200: z.array(linkResponseSchema),
            },
        }
    }, async (request, reply) => {
        const links = await db.select().from(schema.links)

        return reply.status(200).send(links)
    })

    server.delete("/links/:id", {
        schema: {
            summary: "Deleta um link",
            params: deleteLinkParamsSchema,
            response: {
                204: z.any(),
            }
        }
    }, async (request, reply) => {
        const { id } = request.params

        await db.delete(schema.links).where(eq(schema.links.id, id))

        return reply.status(204).send()
    })
}