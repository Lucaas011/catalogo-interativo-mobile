# Catálogo Interativo Mobile

App mobile feito com React Native e Expo que apresenta um catálogo de produtos por categoria, com navegação entre telas e detalhes do produto.

## Funcionalidades

- Tela de login simples.
- Listagem de produtos por categoria com abas.
- Visualização de detalhes do produto ao clicar.
- Navegação entre telas usando React Navigation.
- Logout que retorna à tela de login.

## Tecnologias usadas

- React Native  
- Expo  
- React Navigation (Native Stack e Material Top Tabs)  
- Axios para chamadas API  
- API pública DummyJSON para produtos

## Estrutura do Projeto

/project-root
/components
ProductList.js
/screens
LoginScreen.js
ProductScreen.js
ProductDetails.js
/navigation
AppNavigator.js
App.js

bash
Copy
Edit

## Como rodar o projeto

1. Clone o repositório:  
   ```bash
   git clone https://github.com/Lucaas011/catalogo-interativo-mobile.git
   cd catalogo-interativo-mobile
Instale as dependências:

npm install
Inicie o projeto (sempre com limpeza de cache):

npx expo start -c
Abra no seu emulador ou celular usando o QR code exibido.

Licença
Projeto aberto e gratuito para estudo e uso pessoal.
