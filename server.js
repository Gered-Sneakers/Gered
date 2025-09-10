// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const path = require("path");
const uploadRoutes = require("./src/routes/upload");

let shopifyRoutes = null; // 👈 safe placeholder
try {
  shopifyRoutes = require("./src/routes/shopifyRoutes"); // will fail safely if missing
} catch (e) {
  console.warn("⚠️  Shopify routes not loaded:", e.message);
}

const app = express();

// ---- Config ----
const PORT = process.env.PORT || 8080;
const PUBLIC_DIR = path.join(__dirname, "public");

// CORS (allow your dev origins)
const ALLOWED_ORIGINS = [
  process.env.FRONTEND_ORIGIN,
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:8081",
  "http://127.0.0.1:8081",
  "http://localhost:5000",
  "http://127.0.0.1:5000",
].filter(Boolean);

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin || ALLOWED_ORIGINS.includes(origin)) {
        return cb(null, true); // allow
      }
      return cb(new Error(`CORS blocked for origin: ${origin}`));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options("*", cors());

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Static
app.use(express.static(PUBLIC_DIR));
app.use("/public", express.static(PUBLIC_DIR));

// ---- API routes ----
app.use("/api", uploadRoutes);
if (shopifyRoutes) app.use("/api/shopify", shopifyRoutes); // 👈 only mount if loaded

require("./src/routes/auth.routes")(app);

const db = require("./src/models");
db.sequelize
  .sync()
  .then(() => console.log("✅ DB synced"))
  .catch((e) => console.error("❌ DB sync error:", e));

require("./src/routes/sneaker.routes.js")(app);
require("./src/routes/leverancier.routes.js")(app);
require("./src/routes/werknemer.routes.js")(app);
require("./src/routes/brand.routes.js")(app);
require("./src/routes/labelcolor.routes.js")(app);
require("./src/routes/repairs.routes.js")(app);

// Health
app.get("/api/health", (_req, res) => res.json({ ok: true, port: PORT }));

// Error handler
app.use((err, req, res, _next) => {
  console.error("❌ Error:", err.message);
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
    ...(process.env.NODE_ENV !== "production" && { stack: err.stack }),
  });
});

// Start
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`🖼️  Static files: ${PUBLIC_DIR}`);
});


/* 26-08-2025
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const path = require("path");
const uploadRoutes = require("./src/routes/upload"); // /api/uploadBrand, etc.
const app = express();

// ---- Config ----
const PORT = process.env.PORT || 8080;
const PUBLIC_DIR = path.join(__dirname, "public");

// Allow your Vite dev server
const corsOptions = {
  origin: ["http://localhost:8081"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Handle preflight

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// ---- Static files ----
// Serve /Brands/<file> directly (recommended)
app.use(express.static(PUBLIC_DIR));
// Keep old /public/… URLs working too (backward-compat)
app.use("/public", express.static(PUBLIC_DIR));

// ---- API routes ----
app.use("/api", uploadRoutes); // POST /api/uploadBrand

require("./src/routes/auth.routes")(app);

const db = require("./src/models");
db.sequelize
  .sync()
  .then(() => console.log("✅ DB synced"))
  .catch((e) => console.error("❌ DB sync error:", e));

require("./src/routes/sneaker.routes.js")(app);
require("./src/routes/leverancier.routes.js")(app);
require("./src/routes/werknemer.routes.js")(app);
require("./src/routes/brand.routes.js")(app);
require("./src/routes/labelcolor.routes.js")(app);
require("./src/routes/repairs.routes.js")(app);

// ---- Health check (handy) ----
app.get("/api/health", (_req, res) => res.json({ ok: true }));

// ---- Error handler (incl. Multer errors) ----
app.use((err, req, res, _next) => {
  console.error("❌ Error:", err);
  const status = err.status || 500;
  res.status(status).json({
    error: err.message || "Internal Server Error",
    ...(process.env.NODE_ENV !== "production" && { stack: err.stack }),
  });
});

// ---- Route logging (works with nested routers) ----
function listRoutes(stack, prefix = "") {
  stack.forEach((layer) => {
    if (layer.route && layer.route.path) {
      const methods = Object.keys(layer.route.methods)
        .map((m) => m.toUpperCase())
        .join(",");
      console.log(`📦 ${methods.padEnd(10)} ${prefix}${layer.route.path}`);
    } else if (layer.name === "router" && layer.handle.stack) {
      const nested = layer.regexp?.source
        ?.replace("^\\", "")
        ?.replace("\\/?(?=\\/|$)", "")
        ?.replace(/[$^]/g, "");
      listRoutes(layer.handle.stack, prefix + (nested || ""));
    }
  });
}
listRoutes(app._router.stack);

// ---- Start ----
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`🖼️  Static files: ${PUBLIC_DIR}`);
  console.log("    Try: http://localhost:%s/Brands/<your-file>", PORT);
});
*/

/*const express = require("express"); 
const cors = require("cors");

require('dotenv').config();

const path = require('path');
const uploadRoutes = require('./src/routes/upload'); // require('./src/routes/upload'); //const uploadRoutes = require('./src/routes/image.routes');

const app = express(); 
 
var corsOptions = { 
  origin: "http://localhost:8081",
  credentials: true 
}; 

app.use(cors(corsOptions));   // cors
app.use(express.json());      // parse requests of content-type - application/json 
app.use(express.urlencoded({ extended: true }));  // parse requests of content-type - application/x-www-form-urlencoded
app.use('/public', express.static('public')); 
app.use('/api', uploadRoutes);                    // make folder accessible
//app.use('/brands', express.static(path.join(__dirname, 'public/uploads')));
require("./src/routes/auth.routes")(app);

const db = require("./src/models"); 
db.sequelize.sync();
require("./src/routes/sneaker.routes.js")(app);
require("./src/routes/leverancier.routes.js")(app);
require("./src/routes/werknemer.routes.js")(app);
require("./src/routes/brand.routes.js")(app); 
require("./src/routes/labelcolor.routes.js")(app);
require("./src/routes/repairs.routes.js")(app);

app._router.stack
  .filter(r => r.route)
  .forEach(r => console.log("📦 Route:", r.route.path));
 
// set port, listen for requests 
const PORT = process.env.PORT || 8080; 
app.listen(PORT, () => { 
  console.log(`Server is running on port ${PORT}.`); 
}); */