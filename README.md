# 🏡 Airbnb Clone (MERN Stack)

Aplicação fullstack inspirada na plataforma Airbnb, desenvolvida com foco em arquitetura escalável, boas práticas e experiência do usuário.

O projeto simula um ambiente real de marketplace de hospedagens, permitindo cadastro de usuários, autenticação segura, criação e gerenciamento de anúncios, busca de propriedades e sistema de reservas.

## 🚀 Tecnologias utilizadas

- Frontend: React.js, Context API, Axios
- Backend: Node.js, Express.js
- Banco de dados: MongoDB (Mongoose)
- Autenticação: JWT / bcrypt
- Estilização: CSS / SCSS

## ⚙️ Funcionalidades

- Cadastro e login de usuários
- Autenticação com proteção de rotas
- Criação, edição e exclusão de propriedades
- Upload de imagens
- Sistema de reservas
- Busca e filtros de imóveis
- Interface responsiva

## 🧠 Decisões técnicas

A aplicação foi estruturada seguindo o padrão MVC no backend, com separação clara de responsabilidades (controllers, services e models), visando escalabilidade e manutenção.

No frontend, foi utilizada uma arquitetura baseada em componentes reutilizáveis e gerenciamento de estado global para melhor organização da aplicação.

## 📌 Objetivo

Este projeto foi desenvolvido com o objetivo de consolidar conhecimentos no ecossistema JavaScript fullstack (MERN), simulando desafios reais de mercado, como autenticação, manipulação de dados e integração entre frontend e backend.

## ▶️ Como rodar o projeto

```bash
# Clone o repositório
git clone <url>

# Backend
cd server
npm install
npm run dev

# Frontend
cd client
npm install
npm start
