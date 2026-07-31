import Employee from "../models/Employee.js";

export const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();

        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
