import Trade from "../models/Trade.js";
import Employee from "../models/Employee.js";
import Mapping from "../models/Mapping.js";

export const getIncentives = async (req, res) => {
    try {

        const trades = await Trade.find();
        const employees = await Employee.find();
        const mappings = await Mapping.find();

        // employeeId -> employee
        const employeeMap = new Map();

        employees.forEach(employee => {
            employeeMap.set(employee.employeeId, employee);
        });

        // clientId -> mapping
        const mappingMap = new Map();

        mappings.forEach(mapping => {
            mappingMap.set(mapping.clientId, mapping);
        });

        const result = [];

        for (const trade of trades) {

            const mapping = mappingMap.get(trade.clientId);

            if (!mapping) continue;
            const employee = employeeMap.get(mapping.employeeId);

            if (!employee) continue;

            result.push({

                employeeId: employee.employeeId,
                employeeName: employee.name,
                clientId: trade.clientId,
                tradeId: trade.tradeId,
                brokerage: trade.brokerage,
                incentive: trade.brokerage * 0.10

            });
        }
        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });

    }
};
