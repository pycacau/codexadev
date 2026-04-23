# Codexa — Redesign profissional

## Problema original
> "Refaça esse site, deixando ele mais profissional e menos parecido com IA e mais com um site feito profissionalmente."

O usuário pediu um redesign do site da Codexa (estúdio de desenvolvimento web em Fortaleza/CE) mantendo as mesmas informações, imagens e paleta (magenta/pink + tema escuro), eliminando visual genérico "AI slop" e adotando um look de estúdio profissional.

## Arquitetura

- **Stack**: React 18 + Vite 5 + TypeScript + Tailwind CSS + Framer Motion + Radix UI.
- **Estrutura**: `/app/frontend` (movido de `/app` para bater com o supervisor). Sem backend — site 100% estático.
- **Routing**: `react-router-dom` — `/`, `/projetos/:slug`, `/termos-de-uso`, `/politica-de-privacidade`, 404.

## Sistema de design

- **Paleta (escura)**: background `hsl(240 8% 5%)`, foreground warm off-white, border `hsl(240 8% 16%)`, primary magenta `hsl(336 85% 55%)` (bem próximo do original).
- **Tipografia**: `Bricolage Grotesque` (display/headings), `Inter Tight` (body), `JetBrains Mono` (labels/eyebrows/números).
- **Componentes**: `.btn-primary`, `.btn-ghost`, `.btn-link`, `.frame`, `.eyebrow`, `.display`, `.mono`, `.u-link`.
- **Fundo**: overlay de grão SVG sutil (`.grain`), sem gradientes saturados.

## O que foi implementado (Jan 2026)

- ✅ Reorganização do projeto para `/app/frontend` + script `yarn start` na porta 3000
- ✅ Novo sistema de design (tokens, fontes, componentes) em `index.css` + `tailwind.config.ts`
- ✅ **Header** editorial com números de capítulo e CTA "Iniciar projeto"
- ✅ **Hero** com tipografia display enorme ("Software que funciona. Design que converte."), subtítulo lateral, stats row abaixo
- ✅ **Services** — grid estático 2x4 numerado (substituiu o carrossel)
- ✅ **Projects** — lista editorial em linhas numeradas (substituiu o carrossel)
- ✅ **Process** — nova seção "Como trabalhamos" com 4 etapas
- ✅ **Testimonials** — grid de 6 depoimentos + marquee de marcas
- ✅ **QuoteForm** — sidebar com etapas numeradas, cards limpos, revisão em `<dl>`
- ✅ **Footer** — CTA gigante "fale conosco", grid editorial
- ✅ **Terms / Privacy** — reescritos como artigos limpos e numerados
- ✅ **ProjectDetail / NotFound** — novo visual consistente
- ✅ Todos `data-testid` nos elementos interativos principais

## Backlog / próximos passos

### P1 — Engajamento & conversão
- Captura de e-mail via CTA "Receba um audit gratuito do seu site" (lead magnet)
- Analytics + eventos (clicks no WhatsApp, submit do form)
- Página individual de cada projeto com estudo de caso (resultado, stack, prints reais)

### P2 — SEO & conteúdo
- Blog/artigos (sitemap, RSS, OG dinâmico)
- Schema.org (`Organization`, `Service`, `FAQPage`)
- Versão em inglês

### P3 — Polimento
- Animações "on-scroll" discretas (rise) nos títulos
- Substituir `.ico` dos projetos por screenshots reais (`.webp`)
- Modo claro opcional

## Testes
- Testado visualmente na versão desktop (1920×1080 e 1400×900).
- Build TypeScript limpo (`tsc --noEmit` exit 0).
- Lint JS limpo.

## Enhancement sugerida (para o usuário)
Que tal adicionar um **audit gratuito de 30 minutos** no CTA principal? Além de ser um lead magnet natural para um estúdio dev, converte muito mais que "Solicitar orçamento" porque remove fricção ("é rápido, é grátis, me custa 30min"). Posso plugar num calendário (Cal.com) ou mandar para o WhatsApp com uma pergunta pré-qualificadora.
