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