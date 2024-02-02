import express from 'express'
import path from 'path'
import fs from 'fs/promises'

const Router = express.Router()

const isProduction = process.env.NODE_ENV === "production"

Router.get("/", async (req, res) => {
    const data = {
      environment: process.env.NODE_ENV,
      manifest: await parseManifest(),
    };
    res.render('index.html.ejs', data)  
})
 
const parseManifest = async () => {
    if (!isProduction) return {};
  
    const manifestPath = path.join(path.resolve(), "build", ".vite", "manifest.json");
    const manifestFile = await fs.readFile(manifestPath);
  
    return JSON.parse(manifestFile);
  };

export default Router