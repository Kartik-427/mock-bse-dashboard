import Mapping from "../models/Mapping.js";

export const getMappings = async (req, res) => {
    try {
        const mappings = await Mapping.find();

        res.status(200).json(mappings);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
