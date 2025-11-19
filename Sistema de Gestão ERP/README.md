## Sistema de Gestão ERP

Este repositório contém um ERP modular escrito em Python puro, organizado em serviços independentes e um orquestrador central. O objetivo é oferecer uma base simples para cadastros, movimentações e relatórios em áreas essenciais de uma empresa.

### Principais módulos
- **Core** – Modelos genéricos, repositório em memória e eventos de domínio.
- **Estoque** – Cadastro de produtos, movimentação de entradas/saídas e inventário.
- **Vendas** – Clientes, pedidos e faturamento simples.
- **Compras** – Fornecedores, ordens de compra e integração com estoque.
- **Financeiro** – Lançamentos contábeis, centro de custos e fluxo de caixa básico.
- **RH** – Colaboradores, cargos e folha resumida.
- **Analytics/Relatórios** – Indicadores consolidados usando os demais serviços.

### Executando um exemplo rápido
```bash
python main.py
```
O script cria dados de demonstração, executa operações em cada módulo e imprime um sumário consolidado.

### Site institucional
Um site estático com visual moderno está em `web/`. Para visualizar:
1. Abra `web/index.html` diretamente no navegador ou sirva com um servidor local (`python -m http.server -d web`).
2. Explore as seções que apresentam a fictícia **Fluxora Suite**, com foco nos módulos de vendas, estoque e financeiro.

### Próximos passos sugeridos
1. Substituir o repositório em memória por um banco relacional ou NoSQL.
2. Expor os serviços através de uma API (REST/GraphQL) e interface web.
3. Adicionar autenticação, controle de acesso e logs/auditoria.
4. Expandir o módulo financeiro com conciliação bancária e contas a pagar/receber.

### Estrutura de pastas
```
.
├── README.md
├── requirements.txt
├── main.py
├── web
│   ├── index.html
│   ├── script.js
│   └── styles.css
└── src
    └── erp
        ├── __init__.py
        ├── app.py
        ├── analytics.py
        ├── finance.py
        ├── hr.py
        ├── inventory.py
        ├── purchasing.py
        ├── reporting.py
        ├── sales.py
        └── core
            ├── __init__.py
            ├── models.py
            ├── repository.py
            └── services.py
```

Sinta-se livre para adaptar os módulos às necessidades da sua operação.

