import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import api from "../api/api";
import socket from "../socket/socket";

const Employees = () => {

    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState("");

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchEmployees = async () => {

        try {

            setLoading(true);
            setError("");

            const response = await api.get("/employees");
            setEmployees(response.data);

        } catch (err) {
            console.error("Error fetching employees:", err);
            setError("Failed to load employees.");

        } finally {
            setLoading(false);

        }

    };

    useEffect(() => {

        fetchEmployees();
        const handleSync = () => {
            console.log("Sync Completed");
            fetchEmployees();
        };

        socket.on("sync-completed", handleSync);

        return () => {
            socket.off("sync-completed", handleSync);
        };

    }, []);


    const filteredEmployees = employees.filter((employee) =>
    employee.employeeId.toLowerCase().includes(search.toLowerCase()) ||
    employee.name.toLowerCase().includes(search.toLowerCase()) ||
    employee.role.toLowerCase().includes(search.toLowerCase())
);


            if (loading) {
            return (
                <Layout>
                    <div className="page-container">
                        <h2 className="page-title">Employees</h2>
                        <p className="loading">Loading employees...</p>
                    </div>
                </Layout>
            );
        }

        if (error) {
            return (
                <Layout>
                    <div className="page-container">
                        <h2 className="page-title">Employees</h2>

                        <p className="error">{error}</p>

                        <button
                            onClick={fetchEmployees}
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

            <h2>Employees</h2>

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
        <th>Name</th>
        <th>Role</th>
    </tr>
</thead>

<tbody>
    {filteredEmployees.map((employee) => (
        <tr key={employee.employeeId}>
            <td>{employee.employeeId}</td>
            <td>{employee.name}</td>
            <td>{employee.role}</td>
        </tr>
    ))}
</tbody>

            </table>

        </Layout>
    );
};

export default Employees;