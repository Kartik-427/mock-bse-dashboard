import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import api from "../api/api";
import socket from "../socket/socket";


const Incentives = () => {

    const [incentives, setIncentives] = useState([]);
    const [search, setSearch] = useState("");

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchIncentives = async () => {

        try {
            setLoading(true);
            setError("");

            const response = await api.get("/incentives");
            setIncentives(response.data);

        } catch (err) {
            console.error("Error fetching incentives:", err);
            setError("Failed to load incentives.");

        } finally {
            setLoading(false);
        }

    };

    useEffect(() => {

            fetchIncentives();

            const handleSync = () => {
                console.log("Sync Completed");
                fetchIncentives();
            };

            socket.on("sync-completed", handleSync);

            return () => {
                socket.off("sync-completed", handleSync);
            };

    }, []);


    const filteredIncentives = incentives.filter((item) =>
    item.employeeName.toLowerCase().includes(search.toLowerCase()) ||
    item.employeeId.toLowerCase().includes(search.toLowerCase()) ||
    item.clientId.toLowerCase().includes(search.toLowerCase()) ||
    item.tradeId.toLowerCase().includes(search.toLowerCase())
);

    if (loading) {
    return (
        <Layout>
            <div className="page-container">
                <h2 className="page-title">Incentives</h2>
                <p className="loading">Loading incentives...</p>
            </div>
        </Layout>
    );
}

    if (error) {
        return (
            <Layout>
                <div className="page-container">
                    <h2 className="page-title">Incentives</h2>

                    <p className="error">{error}</p>

                    <button
                        onClick={fetchIncentives}
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

            <h2>Employee Incentives</h2>

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
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Client ID</th>
                        <th>Trade ID</th>
                        <th>Brokerage</th>
                        <th>Incentive</th>
                    </tr>

                </thead>

                <tbody>

                    {filteredIncentives.map((item) => (

                        <tr
                            key={`${item.employeeId}-${item.tradeId}`}
                        >

                            <td>{item.employeeId}</td>

                            <td>{item.employeeName}</td>

                            <td>{item.clientId}</td>

                            <td>{item.tradeId}</td>

                            <td>₹ {item.brokerage}</td>

                            <td>₹ {item.incentive}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </Layout>
    );
};

export default Incentives;