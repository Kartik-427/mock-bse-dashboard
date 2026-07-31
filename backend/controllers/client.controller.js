import Client from "../models/Client.js";

export const getClients = async (req, res) => {
    try {
        const clients = await Client.find();

        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
