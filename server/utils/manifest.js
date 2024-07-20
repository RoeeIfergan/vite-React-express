import path from 'path'
import fs from 'fs/promises'

export const internals = { manifest: {} }

const parseManifest = async () => {
  const isProduction = process.env.NODE_ENV === "production"

  if (!isProduction) return {};

  const manifestPath = path.join(path.resolve(), "build", ".vite", "manifest.json");
  const manifestFile = await fs.readFile(manifestPath);

  const parsedManifest = JSON.parse(manifestFile)

  internals.manifest = parsedManifest
  return parsedManifest
};

export default parseManifest