const EconomicImpactAnalysis = require("../models/EconomicImpactAnalysis");

const getEconomicImpactAnalysisController = async (_, res) => {
    try {
        const analytics = await EconomicImpactAnalysis.find().lean();
        return res
            .status(200)
            .json({ message: "Fetched data succesfully.", analytics });
    } catch (error) {
        console.log("Error", error);
        return res
            .status(500)
            .json({ message: "Error fetching analytics data.", error });
    }
};

module.exports = { getEconomicImpactAnalysisController };
