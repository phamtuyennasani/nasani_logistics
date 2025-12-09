const Ziggy = { "url": "https:\/\/logisticsnasani.info", "port": null, "defaults": {}, "routes": { "contact": { "uri": "contact", "methods": ["GET", "HEAD"] }, "about": { "uri": "about", "methods": ["GET", "HEAD"] }, "login": { "uri": "login", "methods": ["GET", "HEAD"] }, "storage.local": { "uri": "storage\/{path}", "methods": ["GET", "HEAD"], "wheres": { "path": ".*" }, "parameters": ["path"] } } };
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
