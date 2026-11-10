/* Minimal static file server for "A Little Place for You".
   Serves the project folder on PORT (default 3000) and binds 0.0.0.0
   so hosting platforms can reach it. No dependencies, no build step. */

const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || "0.0.0.0";

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp3": "audio/mpeg",
  ".m4a": "audio/mp4",
  ".wav": "audio/wav",
  ".ogg": "audio/ogg",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8"
};

function send(res, status, body, headers) {
  res.writeHead(status, Object.assign({ "Cache-Control": "no-cache" }, headers));
  res.end(body);
}

function resolveRequestPath(urlPath) {
  let decoded;
  try {
    decoded = decodeURIComponent(urlPath);
  } catch (error) {
    return null;
  }
  const normalised = path.normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(ROOT, normalised);
  if (!filePath.startsWith(ROOT)) return null;
  return filePath;
}

function serveFile(req, res, filePath) {
  fs.stat(filePath, (statError, stats) => {
    if (statError) {
      send(res, 404, "Not found", { "Content-Type": "text/plain; charset=utf-8" });
      return;
    }

    let target = filePath;
    if (stats.isDirectory()) {
      target = path.join(filePath, "index.html");
    }

    fs.stat(target, (indexError, indexStats) => {
      if (indexError || !indexStats.isFile()) {
        send(res, 404, "Not found", { "Content-Type": "text/plain; charset=utf-8" });
        return;
      }

      const type = MIME_TYPES[path.extname(target).toLowerCase()] || "application/octet-stream";
      const total = indexStats.size;
      const range = req.headers.range;

      // Range support keeps audio and video seeking (lyrics sync) reliable.
      if (range) {
        const match = /bytes=(\d*)-(\d*)/.exec(range);
        if (match) {
          const start = match[1] ? Number(match[1]) : 0;
          const end = match[2] ? Math.min(Number(match[2]), total - 1) : total - 1;
          if (start > end || start >= total) {
            send(res, 416, "", { "Content-Range": `bytes */${total}` });
            return;
          }
          res.writeHead(206, {
            "Content-Type": type,
            "Content-Length": end - start + 1,
            "Content-Range": `bytes ${start}-${end}/${total}`,
            "Accept-Ranges": "bytes",
            "Cache-Control": "no-cache"
          });
          fs.createReadStream(target, { start, end }).pipe(res);
          return;
        }
      }

      res.writeHead(200, {
        "Content-Type": type,
        "Content-Length": total,
        "Accept-Ranges": "bytes",
        "Cache-Control": "no-cache"
      });
      if (req.method === "HEAD") {
        res.end();
        return;
      }
      fs.createReadStream(target).pipe(res);
    });
  });
}

const server = http.createServer((req, res) => {
  if (req.method !== "GET" && req.method !== "HEAD") {
    send(res, 405, "Method not allowed", { "Content-Type": "text/plain; charset=utf-8" });
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  let pathname = url.pathname;
  if (pathname.endsWith("/")) pathname += "index.html";

  const filePath = resolveRequestPath(pathname);
  if (!filePath) {
    send(res, 400, "Bad request", { "Content-Type": "text/plain; charset=utf-8" });
    return;
  }

  serveFile(req, res, filePath);
});

server.listen(PORT, HOST, () => {
  console.log(`A Little Place for You is open at http://${HOST}:${PORT}`);
});
