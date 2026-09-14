import vinext from "vinext";
import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

const nitroPreset = process.env.RENDER ? "node-server" : "vercel";

export default defineConfig({
  plugins: [
    vinext(),
    nitro({ preset: nitroPreset }),
  ],
});
