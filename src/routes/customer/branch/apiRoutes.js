const express = require("express");
const cors = require("cors");
const router = express.Router();
const candidateApplicationRoutes = require("./api/candidateApplicationRoutes.js");
const apiServiceController = require("../../../controllers/customer/branch/api/serviceController");

const app = express();
app.use(cors());

// Basic routes
router.use("/candidate-application", candidateApplicationRoutes);
router.get("/services", apiServiceController.list);

module.exports = router;
