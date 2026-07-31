import express from "express";
import cors from "cors";
import http from "http";
import { initSocket } from "./config/socket.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import bseRoutes from "./routes/bse.routes.js";
import internalRoutes from "./routes/internal.routes.js";
import { startSync } from "./sync/syncService.js";


dotenv.config();
connectDB();


const app = express();

const server = http.createServer(app);
initSocket(server);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Mock BSE API Running");
});


app.use("/api/bse", bseRoutes);
app.use("/api/internal", internalRoutes);

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

    startSync();

});



