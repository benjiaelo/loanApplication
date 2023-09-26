import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Update from "./pages/Update";
import Customers from "./pages/Customers";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Customers />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
