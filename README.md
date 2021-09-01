# Front-End Challenge - Jungle Devs

### Description

The purpose of this challenge is to give a general idea of how React works and how you can use it to create simple reactive applications. This is a simplified version of [Hapu’s ‘Become a Nanny Share Host’ view](https://www.hapu.com.au/become-nanny-share-host).

### Technologies

- React
- Styled-components
- Axios
- React A/B Test Library
- ESlint
- Stylelint

### Concepts

- Mobile-first application
- The application is using a linter to ensure the quality of code
- The structure of the folders and files follows a pattern called Atomic Kitchen. This pattern helps to construct a more reusable application dividing the React components in small pieces. Here is the folfer structure:

```
.
├── public/                         	# Diretório público do site
├── src/	
|   ├── components/                 	# Todos os componentes do projeto.
|	  |	  ├── Atoms/						        # Diretório com componentes átomos
|   |   |	├── example/                # Cada componente em sua devida pasta.
|   |   |	|   ├── index.js            # Cada pasta do seu componente com um index.js para exportar o componente e suas variações.
|   |   |	|   ├── style.js           	# Arquivo com styled-components importados no index.js
|   |   |	|   └── index.spec.js     	# Arquivo de testes do componente
|	  |	  ├── Molecules/					      # Diretório com componentes moléculas
|   |   |	  └── ...
|	  |	  ├── Organisms/					      # Diretório com componentes organismos
|   |   |	  └── ...
|	  |	  ├── Segments/					        # Diretório com componentes segmentos
|   |   |	  └── ...
|	  |	  ├── Templates/					      # Diretório com componentes de template
|   |   |	  └── ...
|   ├── utils/                        # Utilizado para serviços.
|   |   ├── api/                      
|   |   |   └── ...                   
|   |   ├── html/
|   |   |   └── ...
|   |   ├── hooks/
|   |   |   └── ...
|   ├── pages/                      	# As paginas que compoem o projeto.
|   |   └── ...
|   ├── styles/                     	# Estilos globais da aplicação.
|   |   ├── ...	
|   |   ├── GlobalStyle.js          	# Styled-componente com estilos globais.
|   |   └── variables.js            	# Arquivo contendo cores, breakpoints, device sizes e outras variáveis.
├── routes.js                         # Arquivo que centraliza o roteamento do site	
├── App.jsx
├── index.jsx
└── ...
```

### The layout (Desktop)

![image](./landing-page-desktop.png)

### The layout (Mobile)

![image](./landing-page-mobile.png)

### Getting started

- To install the dependencies:

```sh
npm install
or
yarn install
```

- To run application in development mode:

```sh
npm run start
or
yarn start
```

To build the app:

```sh
npm run build
or
yarn build
```

- To run the linter:

```sh
npm run lint
or
yarn lint
```
