FROM node:26-alpine

# Refresh the Alpine package index and pull the patched zlib
# (ALPINE-CVE-2026-4738 is fixed in 1.4-r0). The explicit version
# requirement also keeps this layer from being served from an older cache.
RUN apk upgrade --no-cache \
 && apk add --no-cache --upgrade 'zlib>=1.4-r0' \
 && rm -rf /var/cache/apk/*

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev && npm cache clean --force

COPY . .

ENV PORT=3000
ENV HOST=0.0.0.0
EXPOSE 3000

CMD ["npm", "start"]
