import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div
            style={{
                width: "220px",
                minHeight: "calc(100vh - 60px)",
                background: "#f2f2f2",
                padding: "20px",
            }}
        >
            <p><Link to="/">Dashboard</Link></p>

            <p><Link to="/clients">Clients</Link></p>

            <p><Link to="/trades">Trades</Link></p>

            <p><Link to="/employees">Employees</Link></p>

            <p><Link to="/incentives">Incentives</Link></p>
        </div>
    );
};

export default Sidebar;
