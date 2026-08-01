import { io } from "socket.io-client";

const socket = io("https://mock-bse-dashboard.onrender.com");

export default socket;