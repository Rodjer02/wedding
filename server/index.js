import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { handleRsvp } from "./rsvp.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.resolve(__dirname, "../dist");
const PORT = process.env.PORT ? Number(process.env.PORT) : 4173;

const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".woff2": "font/woff2",
  ".json": "application/json",
};

http
  .createServer(async (req, res) => {
    if (req.url === "/api/rsvp" && req.method === "POST") {
      await handleRsvp(req, res);
      return;
    }
    const url = (req.url || "/").split("?")[0];
    let file = path.join(dist, url === "/" ? "index.html" : url);
    if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      file = path.join(dist, "index.html");
    }
    const ext = path.extname(file);
    res.setHeader("Content-Type", mime[ext] || "application/octet-stream");
    fs.createReadStream(file).pipe(res);
  })
  .listen(PORT, () => console.log(`http://localhost:${PORT}`));
