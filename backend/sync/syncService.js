import { fetchClients, fetchTrades, fetchEmployees, fetchMappings } from "../services/bse.services.js";
import { retry } from "../utils/retry.js";
import Client from "../models/Client.js";
import Trade from "../models/Trade.js";
import Employee from "../models/Employee.js";
import Mapping from "../models/Mapping.js";
import { getIO } from "../config/socket.js";


const syncData = async () => {

    console.log("Starting Sync...");

    // Clients
    try {
        const clients = await retry(fetchClients);

        console.log("Clients Synced");
        console.log(clients);

        await Client.deleteMany();
        await Client.insertMany(clients);

    } catch (error) {
        console.error("Client Sync Failed:", error.message);
    }

    // Trades
    try {
        const trades = await retry(fetchTrades);

        console.log("Trades Synced");
        console.log(trades);

        await Trade.deleteMany();
        await Trade.insertMany(trades);

    } catch (error) {
        console.error("Trade Sync Failed:", error.message);
    }

    //Employee
    try {
        const employees = await retry(fetchEmployees);

        console.log("Employees Synced");
        console.log(employees);

        await Employee.deleteMany();
        await Employee.insertMany(employees);

    } catch (error) {
        console.error("Employee Sync Failed:", error.message);
    }

    //Mapping
    try {
        const mappings = await retry(fetchMappings);

        console.log("Mappings  Synced");
        console.log(mappings);

        await Mapping.deleteMany();
        await Mapping.insertMany(mappings);

    } catch (error) {
        console.error("Mapping Sync Failed:", error.message);
    }

    getIO().emit("sync-completed", {
    message: "Data Synced Successfully",
    time: new Date(),
});

    console.log("Sync Finished");
};

export const startSync = () => {

    syncData();

    setInterval(syncData, 60000);

};

export default syncData;