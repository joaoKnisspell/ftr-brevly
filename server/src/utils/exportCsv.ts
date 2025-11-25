import { stringify } from "csv-stringify/sync";

type Row = Record<string, any>;
type Rows = Row[];

export function generateCsv(rows: Rows) {
  const csv = stringify(rows, {
    header: true,

    columns: {
      id: "ID",
      slug: "Slug",
      url: "URL Original",
      accesses: "Cliques",
      created_at: "Criado Em"
    }
  });

  return Buffer.from(csv, "utf-8");
}
