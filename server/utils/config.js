import dotenv from 'dotenv'
switch(process.env.NODE_ENV) {
    case 'TEST': {
        dotenv.config({ path: '.env.test'})
        break
    }
    case 'DEVELOPMENT':
    default: {
        dotenv.config()
    }
}