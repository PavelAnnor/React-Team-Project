import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import Nav from "./components/Nav";
import Favorite from "./pages/Favorites";
import Home from "./pages/Home";
import ItemDetails from "./pages/ItemDetails";
import NotFound from "./pages/NotFound";
import { ProductContext } from "./util/context";
import fetchData from "./util/api";


import "./styles/App.css"

export default function App() {
  const [items,setItems] = useState([])
  return (
    <ProductContext.Provider value = {{items,setItems}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/items/:id" element={<ItemDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ProductContext.Provider>
  );
}
