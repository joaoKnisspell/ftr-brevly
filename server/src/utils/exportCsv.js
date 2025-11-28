import { stringify } from "csv-stringify/sync";
export function generateCsv(rows) {
    function formatDateBR(dateString) {
        const d = new Date(dateString);
        const date = d.toLocaleDateString("pt-BR");
        const time = d.toLocaleTimeString("pt-BR");
        return `${date} ${time}`;
    }
    const formattedRows = rows.map(row => ({
        ...row,
        createdAt: formatDateBR(row.createdAt)
    }));
    const csv = stringify(formattedRows, {
        header: true,
        delimiter: ";",
        columns: [
            { key: "id", header: "ID" },
            { key: "slug", header: "URL Encurtada" },
            { key: "url", header: "URL Original" },
            { key: "accesses", header: "Acessos" },
            { key: "createdAt", header: "Criado Em" }
        ]
    });
    return Buffer.from(csv, "utf-8");
}
