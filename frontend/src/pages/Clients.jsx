import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import api from "../api/api";
import socket from "../socket/socket";

const Clients = () => {

    const [clients, setClients] = useState([]);
    const [search, setSearch] = useState("");

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchClients = async () => {

        try {
            setLoading(true);
            setError("");

            const response = await api.get("/clients");
            setClients(response.data);

        } catch (err) {

            console.error("Error fetching clients:", err);
            setError("Failed to load clients.");

        } finally {
            setLoading(false);
        }

    };

        useEffect(() => {

                fetchClients();
                const handleSync = () => {
                    console.log("Sync Completed");
                    fetchClients();
                };

                socket.on("sync-completed", handleSync);

                return () => {
                    socket.off("sync-completed", handleSync);
                };

        }, []);

    

    const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(search.toLowerCase()) ||
    client.clientId.toLowerCase().includes(search.toLowerCase()) ||
    client.city.toLowerCase().includes(search.toLowerCase())
);

        // Loading UI
            if (loading) {
                return (
                    <Layout>
                        <div className="page-container">
                            <h2 className="page-title">Clients</h2>
                            <p className="loading">Loading clients...</p>
                        </div>
                    </Layout>
                );
            }

        // Error UI
            if (error) {
                return (
                    <Layout>
                        <div className="page-container">
                            <h2 className="page-title">Clients</h2>

                            <p className="error">{error}</p>

                            <button
                                onClick={fetchClients}
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

            <div className="page-container">

                <h2 className="page-title">
                    Clients
                </h2>

                <input
                    type="text"
                    placeholder="Search clients..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-box"
                />

                <div className="table-container">

                    <table>

                        <thead>

                            <tr>
                                <th>Client ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>City</th>
                            </tr>

                        </thead>

                        <tbody>

                            {filteredClients.map((client) => (

                                <tr key={client.clientId}>

                                    <td>{client.clientId}</td>

                                    <td>{client.name}</td>

                                    <td>{client.email}</td>

                                    <td>{client.city}</td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </Layout>
    );
};

export default Clients;