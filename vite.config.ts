import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {type ManifestOptions, VitePWA} from "vite-plugin-pwa";

const manifest: Partial<ManifestOptions> | false = {
  "theme_color":"#8936FF",
  "background_color":"#ffffff",
  "icons":[
    {
      "purpose":"maskable",
      "sizes":"512x512",
      "src":"icon512_maskable.png",
      "type":"image/png"
    },
    {
      "purpose":"any",
      "sizes":"512x512",
      "src":"icon512_rounded.png",
      "type":"image/png"
    },
  ],
  "screenshots": [
    {
      "src":"/screenshots/desktop.png",
      "type":"image/png",
      "sizes":"1440x779",
      "form_factor": "wide",
    },
    {
      "src":"/screenshots/mobile.png",
      "type":"image/png",
      "sizes":"373x665",
      "form_factor": "narrow",
    },
  ],
  "orientation":"any",
  "display":"standalone",
  "lang":"ru-RU",
  "short_name":"Tunduk",
  "name":"Түндүк",
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{html,css,js, ico, png, svg}"],
      },
      manifest: manifest,
    }),
  ],
});
