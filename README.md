# BarberDev Backend 💈

API RESTful desenvolvida em Node.js/TypeScript para gerenciamento completo de barbearias.

## 📋 Sumário

- [Visão Geral](#-visão-geral)
- [Funcionalidades da API](#-funcionalidades-da-api)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
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
## 🗄️ Banco de Dados

### Schema Principal
- **Users** - Informações dos barbeiros
- **Haircuts** - Modelos de cortes disponíveis
- **Services** - Histórico de agendamentos
- **Subscriptions** - Assinaturas ativas

## 📖 Documentação do Frontend

Para entender como o frontend consome esta API, consulte a documentação do frontend:
**[📱 Frontend Documentation →](https://github.com/alangt22/Frontend-BarberPRO)**

---

**Backend desenvolvido com TypeScript, segurança e escalabilidade em mente** 🔒
