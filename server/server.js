import './utils/config.js'

import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

import routes from './routes/index.js'
import logger from './utils/logger.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const createServer = () => {
    const isProduction = process.env.NODE_ENV === "production"

    const server = express();

    server.use(routes)

    server.get('*', express.static(
        path.join(__dirname, '..', isProduction ? "build" : "public"))
    )

    return server
}

export const initializeConnections = async () => {
    //initialize db, rabbitmq, etc..
}

export const initServer = async ({ server }) => {
    await initializeConnections()

    const port = process.env.PORT
    server.listen(port, () => {
        logger.info();
        logger.info(`  App running in port ${port}`);
        logger.info();
        logger.info(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${port}/\x1b[0m`);
      })
}