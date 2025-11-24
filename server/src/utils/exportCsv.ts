import { stringify } from "csv-stringify/sync";

export function generateCsv(rows: any[]): Buffer {
  const header = ["id", "slug", "url", "accesses", "created_at"];

  const records = rows.map(r => [
    r.id,
    r.slug,
    r.url,
    r.accesses ?? 0,
    r.created_at instanceof Date ? r.created_at.toISOString() : r.created_at
  ]);

  const csv = stringify([header, ...records], { quoted: true });

  return Buffer.from(csv, "utf-8");
}
