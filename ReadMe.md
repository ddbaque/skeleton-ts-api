A simple and fast skeleton for start a Rest Api with Express JS, TypeScript and Prisma.

## Start Project

### Install Dependencies

Execute the following command in your terminal to install the principal dependencies and start the project server.

```bash
$ npm i
```

In `package.json`, you can find the scripts to interact with the application.

```json

  "scripts": {
    "build:dev": "tsc -w",
    "build": "tsc",
    "dev": "NODE_ENV=development tsnd --respawn --transpile-only ./src/index.ts",
    "start": "NODE_ENV=production ./dist/index.js",
    "prisma:init": "prisma init --datasource-provider sqlite",
    "prisma:migrate": "prisma migrate dev",
    "prisma:studio": "prisma studio"
  },
```

### Initialize Database with Prisma ORM

To create the database for development we use the popular ORM, Prisma. In development we use a simple `sqlite` database, but for production, it is recommended to switch to another option like`MySQL`. 
Use the following commands to init database:

```bash
$ npm run prisma:init

```
After you do that a `prisma/` directory and `.env` file will be generated. In the `schema.prisma` you must create your models. For example: 
```prisma
model User {
  id Int @id @default(autoincrement())
  username String @unique
  password String 
}
``` 

### Migrate changes of DataBase
When you create a new model or update an existing model, you should migrate your `schema.prisma`. For that use:
```bash
$ npm run prisma:migrate
```

### Prisma Studio
With a simple tabular interface you can quickly have a look at the data of your local database and check if your app is working correctly.

Interact with your Data with full CRUD functionality.

View your data any way you want by filtering, sorting and paginating it. For that: 
```bash
$ npm run prisma:studio
```

## Build Project for Production
To generate de code for deploying you can use:
```bash
$ npm run build
```
And execute the code for production with: 
```bash
$ npm start
```

## About Skeleton
This TypeScript Express API skeleton provides a robust foundation for building scalable and maintainable RESTful APIs. Leveraging the power of TypeScript, Express, Prisma ORM, and Zod, this project offers an efficient and type-safe development environment.

Features:

1. TypeScript Language: Enjoy the benefits of static typing, enhanced code clarity, and reduced runtime errors, ensuring a safer and more productive development process.

2. Express Framework: Utilize the popular Express framework to swiftly build a performant and scalable HTTP server, effortlessly handling incoming requests and responses.

3. Prisma ORM: Seamlessly interact with databases using Prisma ORM, which simplifies database access, schema management, and migrations. Easily switch between various database providers, such as MySQL, PostgreSQL, and SQLite, to accommodate different deployment environments.

4. Zod Data Validation: Ensure data integrity and reliability by integrating Zod, a powerful runtime validation library. Validate and sanitize incoming data, making the API more secure and robust against malicious inputs.










