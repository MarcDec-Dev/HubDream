# HubDream

HubDream é uma aplicação web voltada à organização pessoal e compartilhamento de recomendações de filmes, séries, animes e donghuas, com foco em um sistema de recomendação refinado, baseado não apenas em gênero, mas também em tom emocional, maturidade narrativa e intenção da obra.

O projeto foi concebido como portfólio profissional, simulando um produto real, com arquitetura escalável e visão de longo prazo, incluindo a futura evolução para uma rede social cultural.

---

## Visão Geral

A plataforma permite que usuários organizem conteúdos audiovisuais em listas personalizadas, registrem impressões pessoais, compartilhem recomendações e recebam sugestões mais alinhadas ao seu perfil emocional e narrativo.

O principal diferencial do HubDream está em seu sistema de recomendação semântica, que busca aproximar a experiência de descoberta de conteúdo da forma como pessoas realmente consomem e interpretam histórias.

---

## Problema Abordado

Sistemas tradicionais de recomendação tendem a classificar obras apenas por gênero ou popularidade, ignorando aspectos fundamentais como maturidade temática, estilo de escrita e impacto emocional.

Como resultado, conteúdos narrativamente distintos acabam sendo recomendados juntos, gerando frustração para usuários que buscam experiências mais específicas e maduras.

O HubDream propõe uma abordagem baseada em camadas de intenção narrativa, oferecendo recomendações mais coerentes com o perfil real do usuário.

---

## Funcionalidades Principais (Versão 1)

### Usuários e Autenticação

- Cadastro com e-mail e senha
- Login via Google (OAuth)
- Visitantes anônimos com permissões limitadas
- Controle avançado de privacidade do perfil

### Listas e Conteúdos

- Criação de listas por categoria (filmes, séries, animes, donghuas)
- Organização por tags e categorias temáticas
- Upload de imagens personalizadas para listas e itens
- Associação de links externos aos conteúdos salvos

### Comentários e Avaliações

- Comentários pessoais privados por item
- Comentários externos em listas compartilhadas
- Sistema de avaliação por estrelas (1 a 5)
- Edição e exclusão de comentários e avaliações

### Compartilhamento

- Geração de links públicos com permissões configuráveis
- Três níveis de acesso, incluindo modo de perfil compartilhado
- Opção de ocultar listas específicas de visitantes

### Chat

- Sistema de chat simples entre usuários com acesso autorizado
- Controle de permissões baseado no tipo de compartilhamento

### Sistema de Recomendação

- Recomendações baseadas em preferências do usuário, similaridade semântica e avaliações
- Classificação de obras por tom emocional, maturidade temática e estilo narrativo
- Uso de inteligência artificial como ferramenta de classificação semântica, não como decisora final

### Recomendações Externas

- Possibilidade de visitantes sugerirem conteúdos similares
- Área dedicada para visualização de recomendações externas
- Identificação do item relacionado e do autor da recomendação

### Personalização

- Temas de cores personalizados
- Ajustes visuais de bordas e layout
- Upload de imagens personalizadas para perfil e listas

---

## Arquitetura e Stack

### Frontend

- React com TypeScript

### Backend

- Node.js
- Express
- Prisma ORM

### Banco de Dados

- PostgreSQL

### Autenticação

- JWT
- OAuth Google

### Armazenamento de Imagens (Em Decisão)

- Serviço de armazenamento em nuvem (ex: Cloudinary)&#x20;

### Inteligência Artificial (Em Decisão)

- API de modelo de linguagem para classificação semântica de sinopses
- Armazenamento de embeddings no banco de dados
- Algoritmo híbrido de recomendação controlado pela aplicação

---

## Arquitetura do Projeto

O projeto adota uma arquitetura modular, com separação clara entre camadas de controle, serviços, rotas, modelos e middlewares, visando facilitar manutenção, testes e escalabilidade.

---

## Roadmap Futuro

- Sistema de publicações e feed social
- Compartilhamento de frames e momentos assistidos
- Watch party para visualização simultânea
- Expansão das funcionalidades sociais
- Recomendações cruzadas automáticas para perfis compartilhados

---

## Objetivo do Projeto

O HubDream foi desenvolvido com o objetivo de demonstrar:

- Capacidade de planejamento e arquitetura de software
- Pensamento orientado a produto
- Implementação de sistemas complexos de permissões e recomendações
- Evolução contínua de uma aplicação realista

---

## Autor

Desenvolvido por MarcDec-Dev
GitHub: [https://github.com/MarcDec-Dev](https://github.com/MarcDec-Dev)

---

## Status do Projeto

Em desenvolvimento ativo
