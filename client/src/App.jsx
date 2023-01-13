import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import BillPage from "./pages/BillPage";
import CustomerPage from "./pages/CustomerPage";
import StatisticPage from "./pages/StatisticPage";

function App() {
  return (
    <div>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/card" element={<CartPage />} />
            <Route path="/bills" element={<BillPage />} />
            <Route path="/customers" element={<CustomerPage />} />
            <Route path="/statistic" element={<StatisticPage />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
