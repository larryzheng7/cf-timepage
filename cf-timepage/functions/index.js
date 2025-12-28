
const TZ_NAME = "America/Chicago";
function formatTime(now = new Date()) {
  return new Intl.DateTimeFormat("en-US", { timeZone: TZ_NAME, hour: "numeric", minute: "2-digit", hour12: true }).format(now);
}
function formatDate(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", { timeZone: TZ_NAME, year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(now);
  const y = parts.find(p => p.type === "year")?.value ?? "0000";
  const m = parts.find(p => p.type === "month")?.value ?? "01";
  const d = parts.find(p => p.type === "day")?.value ?? "01";
  return `${y}-${m}-${d}`;
}
function formatWeekday(now = new Date()) {
  return new Intl.DateTimeFormat("en-US", { timeZone: TZ_NAME, weekday: "long" }).format(now);
}
function renderHtml({ time, date, day, tz_name }) {
  return `<!doctype html><html><head><meta charset="utf-8"/><title>Time Page</title>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <style>body{font-family:system-ui;margin:2rem}.card{max-width:28rem;border:1px solid #ddd;border-radius:.5rem;padding:1.5rem}.label{color:#555;font-size:.9rem}.value{font-size:2rem;margin:.5rem 0 1rem}</style>
  </head><body><h1>Current Time</h1><div class="card">
  <div class="label">Time (${tz_name})</div><div class="value">${time}</div>
  <div class="label">Date</div><div class="value">${date}</div>
  <div class="label">Day</div><div class="value">${day}</div></div></body></html>`;
}
export function onRequest() {
  const now = new Date();
  const html = renderHtml({ time: formatTime(now), date: formatDate(now), day: formatWeekday(now), tz_name: TZ_NAME });
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
