## React Part 2 Meliuz
Iniciando projeto com react do zero usando webpack e babel.


### O que é? (Onde vivem? O que comem?)
webpack (com “w” minúsculo, respeitando a grafia do site oficial) é um empacotador de código para projetos web, como o browserify. O que ele se propõe a fazer de diferente é focar em módulos da sua aplicação. Nem sempre ter todo e qualquer JavaScript/CSS do seu projeto num único arquivo é bom, por isso o webpack tem a ideia de code splitting, onde você modulariza partes reaproveitáveis do seu projeto, facilitando o desenvolvimento independente, por exemplo, ter uma equipe trabalhando em um módulo X e outra num módulo Y, mas ambos de um mesmo projeto.

Não é sempre que a gente faz um projeto tão grande assim, a ponto de precisar separar equipes em diferentes módulos, mas o webpack também pode ser ideal para pequenos projetos.

### Dependências do projeto:
"@pmmmwh/react-refresh-webpack-plugin": "^0.5.1",
"@babel/cli": "^7.15.7",
"@babel/core": "^7.15.8",
"@babel/plugin-syntax-jsx": "^7.14.5",
"@babel/preset-env": "^7.15.8",
"@babel/preset-react": "^7.14.5",
"@babel/preset-typescript": "^7.15.0",
"@types/react": "^17.0.31",
"@types/react-dom": "^17.0.10",
"babel-loader": "^8.2.3",
"babel-preset-react-app": "^10.0.0",
"cross-env": "^7.0.3",
"css-loader": "^6.4.0",
"html-webpack-plugin": "^5.4.0",
"node-sass": "^6.0.1",
"react-refresh": "^0.10.0",
"sass-loader": "^12.2.0",
"ts-node": "^10.4.0",
"typescript": "^4.4.4",
"webpack": "^5.59.1",
"webpack-cli": "^4.9.1",
"webpack-dev-server": "^4.3.1"

Para instalar as dependencias de desenvolvimento é necessário rodar o seguinte comando: `npm i @babel/cli @babel/core @babel/plugin-syntax-jsx @babel/preset-env @babel/preset-react @babel/preset-typescript @types/react @types/react-dom babel-loader babel-preset-react-app cross-env css-loader html-webpack-plugin node-sass react-refresh sass-loader ts-node typescript webpack webpack-cli webpack-dev-server --save-dev`

Dependências do projeto: `npm i react react-dom react-router-dom axios`

### Meliuz Academy
Professor: Douglas Morais