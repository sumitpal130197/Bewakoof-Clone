import React from "react";
import Common from "./Components/Shared/Common";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import MensClothing from  "./Components/Pages/MensClothing"

function App() {
  return (
    <>
      <Common>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men-clothing" element={<MensClothing />} />

        </Routes>
      </Common>
    </>
  );
}

export default App;
