import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import ItemList from "./components/ItemList";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ItemDetailContainer from "./pages/ItemDetailContainer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/category" element={<Category />} />
        <Route path="/detail:itemId" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}
