import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import api from "../api/api";
import socket from "../socket/socket";


const Trades = () => {

    const [trades, setTrades] = useState([]);
    const [search, setSearch] = useState("");

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    const fetchTrades = async () => {

            try {
                setLoading(true);
                setError("");

                const response = await api.get("/trades");
                setTrades(response.data);

            } catch (err) {
                console.error("Error fetching trades:", err);
                setError("Failed to load trades.");

            } finally {
                setLoading(false);
            }
        };


    useEffect(() => {

        fetchTrades();

        const handleSync = () => {
            console.log("Sync Completed");
            fetchTrades();
        };

        socket.on("sync-completed", handleSync);

        return () => {
            socket.off("sync-completed", handleSync);
        };

}, []);

    const filteredTrades = trades.filter((trade) =>
    trade.tradeId.toLowerCase().includes(search.toLowerCase()) ||
    trade.clientId.toLowerCase().includes(search.toLowerCase()) ||
    trade.symbol.toLowerCase().includes(search.toLowerCase())
);

    if (loading) {
    return (
        <Layout>
            <div className="page-container">
                <h2 className="page-title">Trades</h2>
                <p className="loading">Loading trades...</p>
            </div>
        </Layout>
    );
}

    if (error) {
        return (
            <Layout>
                <div className="page-container">
                    <h2 className="page-title">Trades</h2>

                    <p className="error">{error}</p>

                    <button
                        onClick={fetchTrades}
                        className="retry-btn"
                    >
                        Retry
                    </button>

                </div>
            </Layout>
        );
    }

    return (
        <Layout>

            <h2>Trades</h2>

            <input
                    type="text"
                    placeholder="Search clients..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-box"
                />


            <table border="1" cellPadding="10">

                <thead>
                    <tr>
                        <th>Trade ID</th>
                        <th>Client ID</th>
                        <th>Symbol</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Brokerage</th>
                        <th>Trade Date</th>
                    </tr>
                </thead>

                <tbody>

                    {filteredTrades.map((trade) => (

                        <tr key={trade.tradeId}>

                            <td>{trade.tradeId}</td>

                            <td>{trade.clientId}</td>

                            <td>{trade.symbol}</td>

                            <td>{trade.quantity}</td>

                            <td>₹ {trade.price}</td>

                            <td>₹ {trade.brokerage}</td>

                            <td>
                                {new Date(trade.tradeDate).toLocaleDateString()}
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </Layout>
    );
};

export default Trades;