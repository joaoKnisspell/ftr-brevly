import { buildApp } from "./app.ts";

const app = buildApp();

app.listen({ port: 3333 }).then(() => {
    'HTTP Server Running...'
}).catch((err) => {
    console.error(err);
})