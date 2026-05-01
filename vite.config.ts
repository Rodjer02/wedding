import { defineConfig, type Connect } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { handleRsvp } from "./server/rsvp.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    {
      name: "rsvp-api",
      configureServer(server) {
        const middleware: Connect.NextHandleFunction = async (req, res, next) => {
          if (req.url === "/api/rsvp" && req.method === "POST") {
            await handleRsvp(req, res);
            return;
          }
          next();
        };
        server.middlewares.use(middleware);
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/variables" as *; @use "@/styles/mixins" as *;`,
      },
    },
  },
});
