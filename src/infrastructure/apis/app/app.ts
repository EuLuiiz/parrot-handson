import express from 'express';
import * as http from 'http';

import * as winston from 'winston';
import * as expressWinston from 'express-winston';

import cors from 'cors';
import debug from 'debug';

//Routes
import { CommonRoutesConfig } from '../../../adapters/apis/routes/common.routes.config';
import { UsersRoutes } from '../../../adapters/apis/routes/users.routes.config';
import { loginRoutes } from '../../../adapters/apis/routes/login.routes.config';
import constantsConfig from '../../config/constants/constants.config';
import { PostsRoutes } from '../../adapters/apis/routes/posts.routes.config';


// Configs
const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 8000;
const routes: CommonRoutesConfig[] = [];
const debugLog: debug.IDebugger = debug('app');

// Use
app.use(express.json());
app.use(cors());

// Log
const logOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    )
}

if (!process.env.DEBUG) {
    logOptions.meta = false;
}

app.use(expressWinston.logger(logOptions));

// Routes
routes.push(new UsersRoutes(app));
routes.push(new loginRoutes(app));

// Test
app.get('/', (request: express.Request, response: express.Response) => {
    response.status(200).send(constantsConfig.APP.MESSAGES.DEBUG.APLICATION_STATUS);
});

// Listen
server.listen(port,()=>{
    routes.forEach((route:CommonRoutesConfig)=>{
        debugLog(`Config: ${route.getName()}`)
    })
});