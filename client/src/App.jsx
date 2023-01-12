import "./App.css";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/card" element={<CartPage/>}/>

          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
