# Codexa — Site / Portfólio

Este repositório contém o front-end do site e portfólio da Codexa.
O projeto foi preparado para desenvolvimento local e deploy.

## Sumário

- Descrição
- Como executar em desenvolvimento
- Scripts úteis
- Estrutura principal
- Licença e contato

## Descrição

Projeto front-end construído com React + Vite e estilização com Tailwind CSS.
Inclui componentes prontos para páginas institucionais, seção de projetos e formulário de contato.

## Como executar (desenvolvimento)

1. Clone o repositório:

```bash
git clone <YOUR_GIT_URL>
cd codexa-redefined
```

2. Instale dependências e rode o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

Abra `http://localhost:8080` (ou a URL mostrada pelo Vite).

## Scripts úteis

- `npm run dev` — inicia o servidor de desenvolvimento (Vite).
- `npm run build` — gera a versão de produção.
- `npm run preview` — serve a build localmente.

## Estrutura principal

- `public/` — ativos estáticos (logo, favicon, robots).
- `src/` — código fonte React e componentes.
- `src/components/` — componentes compartilhados (Header, Footer, Projects).
- `vite.config.ts` — configuração do Vite.

## Notas sobre personalização

- Substitua `public/logo.png` por sua logomarca para atualizar o favicon e cabeçalho.
- Atualize `src/components/Footer.tsx` e `src/components/Header.tsx` com suas informações de contato.

## Licença

Adicione um arquivo `LICENSE` com a licença desejada (por exemplo MIT). Se quiser, eu posso gerar um `LICENSE` com seu nome.

## Contato

Para suporte ou dúvidas, adicione seu e-mail ou link do perfil no `README.md` ou no `Footer`.

---

Se quiser, eu actualizo o `LICENSE` com seu nome e ajusto o `README.md` com mais detalhes de deploy (Netlify, Vercel, GitHub Pages etc.).
