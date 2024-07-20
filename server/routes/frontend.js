import express from 'express'
import { internals } from '../utils/manifest'

const Router = express.Router()

Router.get("/", async (req, res) => {
    const data = {
      environment: process.env.NODE_ENV,
      manifest: internals.manifest,
    };
    res.render('index.html.ejs', data, { cache: true })  
})

export default Router