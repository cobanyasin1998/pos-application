import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import BillPage from "./pages/BillPage";
import CustomerPage from "./pages/CustomerPage";
import StatisticPage from "./pages/StatisticPage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div>
      <>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <RouteController>
                  <HomePage />
                </RouteController>
              }
            />
            <Route
              path="/card"
              element={
                <RouteController>
                  <CartPage />{" "}
                </RouteController>
              }
            />
            <Route
              path="/bills"
              element={
                <RouteController>
                  <BillPage />
                </RouteController>
              }
            />
            <Route
              path="/customers"
              element={
                <RouteController>
                  <CustomerPage />
                </RouteController>
              }
            />
            <Route
              path="/statistic"
              element={
                <RouteController>
                  <StatisticPage />
                </RouteController>
              }
            />
            <Route
              path="/products"
              element={
                <RouteController>
                  <ProductPage />
                </RouteController>
              }
            />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;

export const RouteController = ({ children }) => {
  if (localStorage.getItem("posUser")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
