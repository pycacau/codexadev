# Codexa - Site Institucional

Site institucional avançado para empresa de desenvolvimento de sites e sistemas.

## 🚀 Características

- **Design Moderno**: Interface responsiva e moderna com gradientes vibrantes
- **Seção de Serviços**: Apresentação dos serviços oferecidos
- **Portfólio de Projetos**: Showcase dos projetos desenvolvidos
- **Formulário Interativo de Orçamento**: Sistema completo onde clientes respondem perguntas e geram orçamentos automaticamente
- **Envio Automático**: Orçamentos são enviados automaticamente por e-mail

## 🎨 Cores e Identidade Visual

O site utiliza as cores da logo:
- **Laranja**: #FF6B35
- **Rosa**: #FF1744
- **Roxo**: #9C27B0

## 📋 Estrutura

- `index.html` - Estrutura HTML principal
- `styles.css` - Estilos e design responsivo
- `script.js` - Funcionalidades JavaScript e sistema de orçamento
- `logo-header.png` - Logo para o header (recomendado: 40x40px ou maior, formato PNG com fundo transparente)
- `logo-favicon.png` - Logo para o favicon/título do site (recomendado: 32x32px ou 64x64px, formato PNG)

## ⚙️ Configuração

### Envio de E-mail

O formulário de orçamento está configurado para usar **FormSubmit** (serviço gratuito). Para configurar:

1. O e-mail já está configurado: `codexa.service@gmail.com`
2. Os orçamentos serão enviados automaticamente para este e-mail

**Alternativa - EmailJS:**

Se preferir usar EmailJS:

1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Configure um serviço de e-mail
3. Crie um template
4. Descomente e configure o código EmailJS no arquivo `script.js`

## 🎯 Funcionalidades do Formulário de Orçamento

O formulário possui 8 etapas:

1. **Tipo de Projeto**: Site institucional, E-commerce, Sistema ou Landing Page
2. **Número de Páginas**: De 1-3 até 15+ páginas
3. **Tipo de Design**: Template personalizado ou Design customizado
4. **Funcionalidades**: Múltipla escolha (formulários, blog, galeria, etc.)
5. **Prazo**: Urgente, Normal ou Flexível
6. **Manutenção**: Com ou sem suporte contínuo
7. **Dados de Contato**: Nome, e-mail, telefone e empresa
8. **Observações**: Informações adicionais
9. **Resumo**: Visualização completa e valor estimado

## 💰 Sistema de Precificação

O sistema calcula automaticamente o valor baseado em:
- Tipo de projeto (R$ 1.500 - R$ 8.000)
- Número de páginas (R$ 0 - R$ 4.000)
- Tipo de design (R$ 0 - R$ 2.000)
- Funcionalidades adicionais (R$ 200 - R$ 2.000 cada)
- Prazo (desconto ou acréscimo)
- Manutenção (R$ 500 adicional)

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- Desktop
- Tablet
- Mobile

## 🚀 Como Usar

1. Adicione as imagens da logo:
   - `logo-header.png` - Logo para aparecer no header (recomendado: 40x40px ou maior, PNG com fundo transparente)
   - `logo-favicon.png` - Logo para aparecer na aba do navegador (recomendado: 32x32px ou 64x64px, PNG)
2. Abra o arquivo `index.html` em um navegador
3. Ou hospede em um servidor web
4. O e-mail já está configurado para receber os orçamentos

**Nota:** Se as imagens não forem encontradas, o site usará automaticamente o SVG de fallback (símbolo de infinito).

## 📝 Personalização

### Alterar Preços

Edite o objeto `precos` no arquivo `script.js` para ajustar os valores.

### Adicionar Projetos

Edite a seção de projetos no `index.html` para adicionar seus projetos reais.

### Modificar Serviços

Edite a seção de serviços no `index.html` conforme necessário.

## 📧 Contato

- **Email**: codexa.service@gmail.com
- **WhatsApp**: +55 85 9755-5271
- **Instagram**: [@codexadev](https://instagram.com/codexadev)

Para dúvidas ou suporte, entre em contato através do formulário do site ou pelos canais acima.

---

Desenvolvido com ❤️ pela Codexa

