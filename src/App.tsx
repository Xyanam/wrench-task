import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Address from "./pages/Address/Address";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapperContent">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/address" element={<Address />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
