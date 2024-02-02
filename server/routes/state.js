import express from 'express'

const Router = express.Router()

Router.get('/time', (req, res) => res.send(new Date()))

export default Router