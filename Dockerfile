FROM node:12-slim

ENV NODE_ENV=production

WORKDIR /app

COPY /public/ public/

# COPY /public/build/ /public/build/

COPY /endpoints/interface/ ./

CMD ["node", "main.js"]