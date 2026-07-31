import Trade from "../models/Trade.js";

export const getTrades = async (req, res) => {
    try {
        const trades = await Trade.find();

        res.status(200).json(trades);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
