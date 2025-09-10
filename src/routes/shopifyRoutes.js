// routes/shopifyRoutes.js
const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/shopifyController");

router.get("/health", ctrl.health);
router.get("/locations", ctrl.locations);
router.post("/bulk-upsert", ctrl.bulkUpsert);

module.exports = router;
