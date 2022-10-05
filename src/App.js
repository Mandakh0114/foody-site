import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ResponsiveDrawer from "./navbar/Navbar";
import { Grapik } from './pages/Grapik'
import { Order } from './pages/Order'
import { Setting } from "./pages/Setting";
import { Menu } from './pages/Menu';

function App() {
  return (
    <BrowserRouter>
      <ResponsiveDrawer/>
      <Routes>
        <Route path="Order" element={<Order/>}></Route>
        <Route path="Setting" element={<Setting/>}></Route>
        <Route path="Menu" element={<Menu/>}></Route>
        <Route path="Grapik" element={<Grapik/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
