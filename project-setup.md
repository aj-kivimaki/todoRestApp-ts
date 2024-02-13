## Setup Vanilla TypeScript project

### create package.json

```shell
npm init -y
```

### create tsconfig.json

```shell
tsc --init
```

tsconfig setup

```json
"target": "es2018", /* choose the version */
"moduleResolution": "node10", /* enable */
"rootDir": "./src", /* choose root folder for TS files */
"outDir": "./dist", /* choose output folder for JS files */
```

### Install Dependencies

#### Dependencies

- express
- body-parser

```shell
npm i --save express body-parser
```

#### DevDependencies

- nodemon (if not globally installed already)

### Install types for node/express

```shell
npm i --save-dev @types/node
npm i --save-dev @types/express
```

### Run compiler (watch mode)

```shell
tsc -w
```

### Add `start` script

```json
"start": "nodemon dist/app.js"
```

### Create Router

In routes folder ts file

```shell
import { Router } from "express";

const router = Router();

router.get("/");
router.post("/");
router.patch("/:id");
router.delete("/:id");

export default router;
```
