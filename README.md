# 🔗 Encurtador de Links - Brev.ly

Uma aplicação web desenvolvida em **React** para encurtar URLs, copiar links com um clique, visualizar estatísticas e gerenciar seus links encurtados.

## 🚀 Tecnologias Utilizadas

* **React.js**
* **TypeScript**
* **TailwindCSS**
* **React Hook Form**
* **Zod**
* **Shadcn/UI**
* **Vite**
* **Fastify + Drizzle** (API e banco de dados)

## 📌 Funcionalidades

* ✨ Criar links encurtados
* 📋 Copiar link encurtado com um clique
* 📊 Visualizar quantidade de acessos
* 🗑️ Excluir links
* 🖇️ Listagem com slug, URL original e data
* 📤 Exportar lista completa de links para arquivo CSV
* 🎛️ Interface responsiva e moderna
* 🔐 Validação de formulários com Zod

## 📁 Estrutura do Projeto

O repositório é dividido em duas pastas principais:

* **web/** – Aplicação Front-end (React)
* **server/** – API Back-end (Fastify + Drizzle)

Além disso, o projeto utiliza **Cloudflare R2** para armazenar e disponibilizar arquivos **CSV** com a listagem de links criados.

## ▶️ Como Rodar o Projeto

Certifique-se de ter **Node.js 18+** instalado.

### 1. Instale as dependências

```bash
npm install
```

### 2. Inicie o servidor de desenvolvimento (FrontEnd/BackEnd)

```bash
npm run dev
```

### 3. Acesse no navegador

```
http://localhost:5173
```

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com:

```env
VITE_API_URL=https://sua-api.com
```

## 🧪 Scripts Disponíveis

```bash
npm run dev       # Ambiente de desenvolvimento
npm run build     # Build de produção
npm run preview   # Pré-visualização da build
```

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos finais estarão em:

```
dist/
```

## 🛠️ Backend

O backend foi desenvolvido em **Fastify + Drizzle ORM**, com rotas para:

* Criar link
* Buscar todos os links
* Deletar link
* Redirecionamento pelo slug

> Caso queira, posso gerar a documentação da API também.

## 📜 Licença

Este projeto está sob a licença MIT.

---

Se quiser personalizar mais o README ou adicionar imagens, badges, GIF da interface ou documentação da API, posso gerar para você!
