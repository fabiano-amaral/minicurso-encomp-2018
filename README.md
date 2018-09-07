## Estrutura de pastas

Para ficar mais fácil o gerenciamento de arquivos vamos criar alguns diretórios para organizar nosso projeto. Mais a frente iremos adicionar novos diretórios.

Deixe suas pastas da seguinte forma

```bash
.
├── README.md
├── api/
```

- **Diretório API**: Conterá todos nossos arquivo relativos exclusivamentes da nossa API, inclusive Dockerfiles.
- **Diretório raiz**: docker-compose.

## Uma api hello-world

Entre no diretório api e execute o comando `yarn init`



!["yarn init"](./figs/yarn-init.PNG "yarn init")

Adicione o módulo restify ao seu projeto

para adicionar rode no diretório api `yarn add restify`

crie um arquivo `index.js` no diretório raiz
```
project structure
.
├── README.md
└── api
    ├── index.js
    ├── package.json
    ├── node_modules
    └── yarn.lock

1 directory, 4 files

```

```
package.json

{
  "name": "api",
  "version": "1.0.0",
  "description": "a simple node API with postgres",
  "main": "index.js",
  "author": "Fabiano",
  "license": "MIT",
  "private": false,
  "dependencies": {
    "restify": "^7.2.1"
  }
}


```

#### O que são esses arquivos?
- **index.js**: Arquivo que será executado para subir nosso servidor e será o ponto de entrada de todo o restante do nosso código.
- **node_modules**: Local onde são salvos nosso módulos instalados através do nosso _package manager_ (`yarn` ou `npm`).
- **package.json**: É o responsável por descrever toda nosa aplicação `node`, listando dependências, autor, repositório git, versão e etc. O _package manager_ é quem cria e altera esse arquivo na maioria dos casos.

#### hello-world

adicione o código em `index.js`
```

const restify = require('restify')

const server = restify.createServer()


server.get('/', (req, res, next) => {
  console.log(req.headers)
  res.send(200, Math.random().toString(36).substr(3, 8))
  next()
})


server.listen(8080)

```

rode: `node index.js` e acesse `localhost:8080` no navegador.