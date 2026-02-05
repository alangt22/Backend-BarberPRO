# BarberDev Backend 💈

API RESTful desenvolvida em Node.js/TypeScript para gerenciamento completo de barbearias.

## 📋 Sumário

- [Visão Geral](#-visão-geral)
- [Funcionalidades da API](#-funcionalidades-da-api)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Executando a Aplicação](#-executando-a-aplicação)
- [Variáveis de Ambiente](#-variáveis-de-ambiente)
- [API Endpoints](#-api-endpoints)
- [Banco de Dados](#-banco-de-dados)
- [Deploy](#-deploy)
- [Testes](#-testes)
- [Documentação do Frontend](#-documentação-do-frontend)

## 🎯 Visão Geral

Backend robusto e escalável que serve como motor para o sistema BarberDev. Oferece endpoints completos para gerenciamento de usuários, cortes de cabelo, agendamentos e pagamentos recorrentes através do Stripe.

## ✨ Funcionalidades da API

### 🔐 Autenticação e Autorização
- Registro e autenticação de usuários com JWT
- Middleware de autenticação para rotas protegidas
- Hash de senhas com bcryptjs
- Gerenciamento de sessões

### 👥 Gestão de Usuários
- CRUD completo de usuários
- Perfil de barbeiro com informações personalizadas
- Integração com Stripe Customer ID
- Atualização de dados cadastrais

### 💈 Sistema de Cortes
- Cadastro de modelos de cortes com preços
- Listagem paginada de cortes
- Atualização de status (ativo/inativo)
- Controle de limite baseado em assinatura
- Detalhes específicos de cada corte

### 📅 Gestão de Agendamentos
- Criação de novos agendamentos
- Listagem por usuário
- Finalização com registro de histórico
- Relação com clientes e cortes

### 💰 Pagamentos e Assinaturas
- Integração completa com Stripe
- Criação de assinaturas recorrentes
- Webhooks para sincronização de pagamentos
- Portal do cliente para gestão
- Verificação de status da assinatura

## 🛠 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript/TypeScript
- **Express.js** - Framework web rápido e minimalista
- **TypeScript** - Tipagem estática e melhor DX
- **Prisma** - ORM moderno com type-safety
- **PostgreSQL** - Banco de dados relacional robusto
- **JWT** - Tokens de autenticação
- **bcryptjs** - Hash de senhas seguro
- **Stripe** - Pagamentos e assinaturas
- **CORS** - Compartilhamento de recursos entre origens
- **dotenv** - Gestão de variáveis de ambiente

## 📁 Estrutura do Projeto

```
backend/
├── src/
│   ├── controllers/              # Controladores da API
│   │   ├── user/                 # Gestão de usuários
│   │   │   ├── CreateUserController.ts
│   │   │   ├── AuthUserController.ts
│   │   │   ├── DetailUserController.ts
│   │   │   └── UpdatedUserController.ts
│   │   ├── haircut/              # Gestão de cortes
│   │   │   ├── CreateHaircutController.ts
│   │   │   ├── ListHaircutController.ts
│   │   │   ├── UpdateHaircutController.ts
│   │   │   ├── CheckSubscriptionController.ts
│   │   │   ├── CountHaircutsController.ts
│   │   │   └── DetailHaircutController.ts
│   │   ├── schedule/             # Gestão de agendamentos
│   │   │   ├── NewScheduleController.ts
│   │   │   ├── ListScheduleController.ts
│   │   │   └── FinishScheduleController.ts
│   │   └── subscriptions/        # Pagamentos e assinaturas
│   │       ├── SubscribeController.ts
│   │       ├── WebhooksController.ts
│   │       └── CreatePortalController.ts
│   ├── services/                 # Lógica de negócio
│   │   ├── user/
│   │   ├── haircut/
│   │   ├── schedule/
│   │   └── subscriptions/
│   ├── middlewares/              # Middlewares
│   │   └── isAuthenticated.ts    # Verificação de JWT
│   ├── utils/                    # Utilitários
│   │   ├── stripe.ts            # Configuração Stripe
│   │   └── manageSubscription.ts # Gestão de assinaturas
│   ├── prisma/                   # Configuração Prisma
│   │   └── index.tsx            # Cliente Prisma
│   ├── generated/               # Código gerado Prisma
│   ├── server.ts                # Entrada da aplicação
│   └── routes.ts                # Definição de rotas
├── prisma/
│   ├── schema.prisma            # Schema do banco
│   └── migrations/               # Histórico de migrações
├── dist/                        # Código compilado
├── package.json
├── tsconfig.json
├── .env
└── vercel.json                  # Configuração deploy Vercel
```

## 🔧 Pré-requisitos

- **Node.js** 18+ instalado
- **PostgreSQL** 13+ configurado
- **Conta Stripe** com produtos criados
- **npm** ou **yarn** para gerenciamento de pacotes

## 🚀 Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/alangt22/Backend-BarberPRO
cd barberdev/backend
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure o banco de dados:**
```bash
npx prisma migrate dev
npx prisma generate
```

## ⚙️ Configuração

1. **Crie o arquivo `.env`:**
```env
# Database
DATABASE_URL="..."

# JWT
JWT_SECRET="..."

# Stripe
STRIPE_API_KEY="..."
STRIPE_WEBHOOK_SECRET="..."

# Server
PORT=...
```

2. **Configure o Stripe Dashboard:**
- Crie produtos e preços
- Configure webhooks endpoints
- Copie as chaves API

## 🏃‍♂️ Executando a Aplicação

### Modo Desenvolvimento
```bash
npm run dev
```
API disponível em `http://localhost:3333`

### Modo Produção
```bash
npm run build
npm start
```

### Build para Deploy
```bash
npm run build
```

## 🔐 Variáveis de Ambiente

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `DATABASE_URL` | String de conexão PostgreSQL | `postgresql://user:pass@localhost:5432/db` |
| `JWT_SECRET` | Chave secreta para tokens JWT | `super-secret-key` |
| `STRIPE_API_KEY` | Chave secreta da API Stripe | `sk_test_...` |
| `STRIPE_WEBHOOK_SECRET` | Secret para webhooks | `whsec_...` |
| `PORT` | Porta do servidor | `3333` |
| `NODE_ENV` | Ambiente da aplicação | `development` |

## 📡 API Endpoints

### Autenticação
- `POST /users` - Criar novo usuário
- `POST /session` - Login e geração de token

### Usuários (Protegidas)
- `GET /me` - Obter perfil do usuário
- `PUT /users` - Atualizar dados do usuário

### Cortes de Cabelo (Protegidas)
- `POST /haircut` - Criar novo modelo de corte
- `GET /haircuts` - Listar cortes do usuário
- `PUT /haircut` - Atualizar corte existente
- `GET /haircut/check` - Verificar limite da assinatura
- `GET /haircut/count` - Contar total de cortes
- `GET /haircut/detail` - Detalhes de um corte específico

### Agendamentos (Protegidas)
- `POST /schedule` - Criar novo agendamento
- `GET /schedules` - Listar todos os agendamentos
- `DELETE /schedule` - Finalizar/Cancelar agendamento

### Pagamentos (Protegidas)
- `POST /subscribe` - Criar assinatura Stripe
- `POST /create-portal` - Criar portal do cliente
- `POST /webhooks` - Receber eventos Stripe (pública)

### Exemplo de Requisição
```bash
# Criar novo usuário
curl -X POST http://localhost:3333/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Barbeiro",
    "email": "joao@barbearia.com",
    "password": "123456"
  }'

# Autenticar
curl -X POST http://localhost:3333/session \
  -H "Content-Type: application/json" \
  -d '{
    "email": "joao@barbearia.com",
    "password": "123456"
  }'
```

## 🗄️ Banco de Dados

### Schema Principal
- **Users** - Informações dos barbeiros
- **Haircuts** - Modelos de cortes disponíveis
- **Services** - Histórico de agendamentos
- **Subscriptions** - Assinaturas ativas

### Relacionamentos
- User → Haircuts (1:N)
- User → Services (1:N)
- User → Subscription (1:1)
- Haircut → Services (1:N)

### Comandos Prisma Úteis
```bash
# Criar nova migração
npx prisma migrate dev --name add_new_field

# Resetar banco
npx prisma migrate reset

# Visualizar banco
npx prisma studio

# Gerar cliente
npx prisma generate
```


## 📖 Documentação do Frontend

Para entender como o frontend consome esta API, consulte a documentação do frontend:
**[📱 Frontend Documentation →](https://github.com/alangt22/Frontend-BarberPRO)**

---

**Backend desenvolvido com TypeScript, segurança e escalabilidade em mente** 🔒