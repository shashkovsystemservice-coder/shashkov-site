# Marketing Studio website

This directory contains the standalone Marketing Studio website, kept separate from the main `shashkov-site` application.

## Files

- `index.html` — landing page.
- `report/index.html` — sample research report.
- `api/contact.js` — contact form endpoint; sends submissions to Telegram.

## Vercel setup

Connect the existing Vercel project `marketing-studio` to this repository and use:

- Git repository: `shashkovsystemservice-coder/shashkov-site`
- Production branch: `marketing-studio-site`
- Root Directory: `marketing-studio-site`
- Framework Preset: Other / static

Configure these Production environment variables in the Vercel project (do not commit their values):

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

The founder portrait is loaded from the existing `shashkov-site` GitHub asset URL referenced in `index.html`.
