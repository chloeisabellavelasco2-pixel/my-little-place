FROM node:26-alpine

# Refresh Alpine packages and require the patched zlib
# (ALPINE-CVE-2026-4738 is fixed in 1.4-r0).
# Keep /var/cache/apk present so image scanners can read package metadata.
RUN mkdir -p /var/cache/apk \
 && apk upgrade --no-cache \
 && apk add --no-cache --upgrade 'zlib>=1.4-r0'

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev && npm cache clean --force

COPY . .

ENV PORT=3000
ENV HOST=0.0.0.0
EXPOSE 3000

CMD ["npm", "start"]
