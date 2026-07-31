import express from "express";
import clients from "../mock-bse/clients.json" with { type: "json" };
import trades from "../mock-bse/trades.json" with { type: "json" };

import { delay } from "../utils/delay.js";
import { shouldFail } from "../utils/failure.js";

const router = express.Router();


router.get("/clients", async (req, res) => {
    await delay(Number(process.env.BSE_DELAY));
    if (shouldFail()) {
        return res.status(500).json({
            message: "BSE Server Error"
        });
    }

    res.json(clients);
});

/*router.get("/clients", (req, res) => {
  res.json(clients);
});

router.get("/trades", (req, res) => {
  res.json(trades);
});*/

router.get("/trades", async (req, res) => {

    await delay(Number(process.env.BSE_DELAY));

    if (shouldFail()) {
        return res.status(500).json({
            message: "BSE Server Error"
        });
    }


    const { clientId, startDate, endDate } = req.query;

    let filteredTrades = [...trades];

    if (clientId) {
        filteredTrades = filteredTrades.filter(
            trade => trade.clientId === Number(clientId)
        );
    }

    if (startDate && endDate) {
        filteredTrades = filteredTrades.filter(trade =>
            trade.tradeDate >= startDate &&
            trade.tradeDate <= endDate
        );
    }

    res.json(filteredTrades);
});

export default router;







