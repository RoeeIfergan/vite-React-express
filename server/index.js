import { createServer, initServer } from "./server.js";
import logger from './utils/logger.js'

const run = async () => {
    try {
        const server = createServer()
    
        await initServer({ server, port: process.env.PORT})
    } catch(error) {
        logger.error(`Server crashed because: ${error.message}`)
    }
}

run()