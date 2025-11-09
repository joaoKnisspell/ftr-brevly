import { db, schema } from '../db/index.ts';
import { eq } from 'drizzle-orm';

async function main() {
  try {
    console.log('🔍 Testando conexão e inserção no banco...');

    // 1️⃣ Inserir um novo link de teste
    const inserted = await db
      .insert(schema.links)
      .values({
        url: 'https://meusite.com',
        shortened_url: 'abc123',
      })
      .returning();

    console.log('✅ Link inserido com sucesso:');
    console.table(inserted);

    // 2️⃣ Buscar o link que acabamos de inserir
    const result = await db
      .select()
      .from(schema.links)
      .where(eq(schema.links.shortened_url, 'abc123'));

    console.log('🔎 Link encontrado no banco:');
    console.table(result);
  } catch (error) {
    console.error('❌ Erro ao conectar, inserir ou consultar o banco:', error);
  } finally {
    process.exit(0);
  }
}

main();
