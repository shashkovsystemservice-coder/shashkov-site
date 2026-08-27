SHASHKOV SITE V5 - COMPLETE PROJECT

This ZIP is a complete standalone project. Do not merge it with older versions.

LOCAL RUN (Windows):
1. Extract the ZIP.
2. Open the project folder.
3. Double-click RUN-LOCAL.bat
   OR run in CMD:
      npm ci
      npm run dev
4. Open the local URL printed by the terminal (usually http://localhost:3000).

CLEAN BUILD:
Double-click BUILD-SITE.bat
OR run:
   npm ci
   npm run build

Hosting configuration:
.openai/hosting.json
project_id is preserved exactly.

Required Sites build plugin:
build/sites-vite-plugin.ts

Do not upload node_modules, dist, .next, .vinext, .wrangler or log files.
