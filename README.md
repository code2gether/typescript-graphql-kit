# TypeScript GraphQL Server Kit

🚀 Bootstrap your GraphQL server within seconds.

What's inside?

- [TypeORM](//webpack.js.org/) - an ORM that can be used with TypeScript and JavaScript (ES5, ES6, ES7).
- [GraphQL](//sass-lang.com/) - A query language for your API
- [GraphQLYoga](//babeljs.io/) - Scalable GraphQL server
- [GraphQL Playground](//github.com/prisma/graphql-playground) - GraphQL IDE for better development workflows
- [Nodemon](//prettier.io/) - a CLI utility that wraps your Node app, watches the file system for changes and automatically restarts the process.
- [TSLint](//eslint.org/) - An extensible linter for the TypeScript language.

### Requirements

Make sure your machine has installed following dependencies:

- [Node.js](//nodejs.org/)
- [YARN](https://yarnpkg.com/en/docs/install#mac-stable)
- [Postgress](//www.postgresql.org/) Mac user can install postgress using [Brew Package Manager](//brew.sh/), using the following commands:
  ```bash
  brew install postgresql        #Installs postgress
  brew services start postgresql #Starts postgress service
  brew services stop postgresql  #Stops postgress service
  ```

## Installation

### Clone the repository

```bash
$ git clone -b master git@github.com:code2gether/typescript-graphql-kit.git
# or if you want to rename the project directory name
$ git@github.com:code2gether/typescript-graphql-kit.git <project-name>
```

### Steps to run this project:

1. Resolve required dependencies.

   ```bash
   # Go to the `project` directory
   # Install node dependencies.

   $ yarn
   ```

2. Setup database settings inside `ormconfig.json` file

   ```bash
   {
   "port"    : "DB_PORT",
   "username": "DB_USERNAME",
   "password": "DB_PASSWORD",
   "database": "DB_NAME",
   }
   ```

3. Run `yarn start` command and start developing.
