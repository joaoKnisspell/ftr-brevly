import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema.ts';

console.log('DATABASE_URL carregada =>', process.env.DATABASE_URL);

const client = postgres(process.env.DATABASE_URL!);
export const db = drizzle(client, { schema });

export { schema };
