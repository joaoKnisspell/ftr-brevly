import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export async function linkRoutes(app: FastifyInstance){
    app.get('/meus-links', (req: FastifyRequest, res: FastifyReply) => {
        return res.send({
            data: [
                {
                    href: 'https://www.google.com.br',
                    title: 'Google',
                    id: 1
                }
            ]
        });
    })
}