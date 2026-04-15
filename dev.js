#!/usr/bin/env node
/**
 * Vastorg local dev server — no dependencies, mirrors Vercel routing.
 *
 * Routes:
 *   /guide        → /guide/index.html
 *   /api/*        → api/*.js  (Node handler)
 *   /*            → /index.html  (SPA fallback)
 *   static files  → served as-is
 *
 * Usage:  node dev.js [port]
 */

const http  = require('http');
const fs    = require('fs');
const path  = require('path');
const PORT  = parseInt(process.argv[2], 10) || 3000;
const ROOT  = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css' : 'text/css; charset=utf-8',
  '.js'  : 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.svg' : 'image/svg+xml',
  '.ico' : 'image/x-icon',
  '.png' : 'image/png',
  '.jpg' : 'image/jpeg',
  '.webp': 'image/webp',
  '.txt' : 'text/plain; charset=utf-8',
  '.xml' : 'application/xml',
  '.woff2': 'font/woff2',
};

function serveFile(res, filePath) {
  const ext  = path.extname(filePath).toLowerCase();
  const mime = MIME[ext] || 'application/octet-stream';
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, {
      'Content-Type' : mime,
      'Cache-Control': 'no-store',
    });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0].replace(/\/+$/, '') || '/';

  // --- /api/* — delegate to api handler files
  if (urlPath.startsWith('/api/')) {
    const handlerName = urlPath.slice(5); // strip /api/
    const handlerPath = path.join(ROOT, 'api', handlerName + '.js');
    if (fs.existsSync(handlerPath)) {
      // Clear require cache so edits are picked up
      delete require.cache[require.resolve(handlerPath)];
      try {
        const handler = require(handlerPath);
        return handler(req, res);
      } catch (e) {
        console.error('API error:', e);
        res.writeHead(500); res.end('API error');
        return;
      }
    }
    res.writeHead(404); res.end('API route not found');
    return;
  }

  // --- Static files: try exact path first
  const fileCandidates = [
    path.join(ROOT, urlPath),
    path.join(ROOT, urlPath, 'index.html'),  // directory index
    path.join(ROOT, urlPath + '.html'),       // extensionless → .html
  ];

  for (const candidate of fileCandidates) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return serveFile(res, candidate);
    }
  }

  // --- SPA fallback
  serveFile(res, path.join(ROOT, 'index.html'));
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`\n  Vastorg dev server\n`);
  console.log(`  ➜  http://localhost:${PORT}/`);
  console.log(`  ➜  http://localhost:${PORT}/guide`);
  console.log(`\n  Ctrl+C to stop\n`);
});
