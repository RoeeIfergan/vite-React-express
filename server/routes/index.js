import express from 'express'
import stateRoutes from './state.js'
import frontendRoutes from './frontend.js'
const Router = express.Router()

Router.use(stateRoutes)

Router.use(frontendRoutes)

export default Router