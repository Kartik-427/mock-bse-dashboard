import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import Trades from "./pages/Trades";
import Employees from "./pages/Employees";
import Incentives from "./pages/Incentives";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Dashboard />} />

                <Route path="/clients" element={<Clients />} />

                <Route path="/trades" element={<Trades />} />

                <Route path="/employees" element={<Employees />} />

                <Route path="/incentives" element={<Incentives />} />

            </Routes>

        </BrowserRouter>
    );
}

export default App;