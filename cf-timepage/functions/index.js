export function onRequest() {
  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"/><title>cf-timepage – Digital Clock</title>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<!-- (same <style> block as above) -->
${/* Paste the entire <style> block from index.html here */''}
</head><body>
${/* Paste the same <body> content from index.html here */''}
</body></html>`;
  return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
}
