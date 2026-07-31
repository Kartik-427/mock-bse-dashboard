import express from "express";

import { getClients } from "../controllers/client.controller.js";
import { getTrades } from "../controllers/trade.controller.js";
import { getEmployees } from "../controllers/employee.controller.js";
import { getMappings } from "../controllers/mapping.controller.js";
import { getIncentives } from "../controllers/incentive.controller.js";

const router = express.Router();

router.get("/clients", getClients);
router.get("/trades", getTrades);
router.get("/employees", getEmployees);
router.get("/mappings", getMappings);
router.get("/incentives", getIncentives);

export default router;
