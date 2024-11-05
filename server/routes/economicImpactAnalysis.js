const {
    getEconomicImpactAnalysisController,
} = require("../controllers/economicImpactAnalysisControllers");

const router = require("express").Router();

router.get("/getEconomicImpactAnalysis", getEconomicImpactAnalysisController);

module.exports = router;
