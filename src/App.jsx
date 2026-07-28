import {useState, useEffect} from "react";
import {Routes, Route} from "react-router";
import Nav from "./components/Nav"
import Favorite from "./pages/Favorites"
import Home from "./pages/Home"
import ItemDetails from "./pages/ItemDetails"
import NotFound from "./pages/NotFound"
import context from "./util/context"
import api from "./util/api"




import {useContext,useState} from "react"
import { ProductContext } from "./util/context"

export default function App(){




  return(
 <Routes>
<Route path="/" element={<Home />} />
<Route path="/favorites" element={<Favorite/>} />
<Route path="/items/:id" element={<ItemDetails />} />
<Route path="*" element={<NotFound/>}/>


  
 </Routes>

    
  )
}