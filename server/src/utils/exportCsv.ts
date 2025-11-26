import { stringify } from "csv-stringify/sync";

type Row = Record<string, any>;
type Rows = Row[];

export function generateCsv(rows: Rows) {
  const csv = stringify(rows, {
    header: true,
    delimiter: ";",
    columns: [
      { key: "id", header: "ID" },
      { key: "slug", header: "Slug" },
      { key: "url", header: "URL Original" },
      { key: "clicks", header: "Cliques" },
      { key: "createdAt", header: "Criado Em" }
    ]
  });

  return Buffer.from(csv, "utf-8");
}
