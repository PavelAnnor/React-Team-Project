import {useState, useEffect} from "react";
import {Routes, Route} from "react-router";
import Nav from "./components/Nav"
import Favorite from "./pages/Favorites"
import Home from "./pages/Home"
import ItemDetails from "./pages/ItemDetails"
import NotFound from "./pages/NotFound"
import {ProductContext} from "./util/context"
import fetchData from "./util/api"




export default function App(){
  const [items, setItems] = useState([]);
  const [favoriteItems,] = useState([]);
  const [theme, setTheme] = useState("light");
console.log(items)

  const getData = async () => {
 const data = await fetchData() 
 setItems(data)
}

  useEffect(() => {
   getData()

   
  },[])

//  const addFavorite = (item)

  return(
<Routes>
<Route path="/" element={<Home />} />
<Route path="/favorites" element={<Favorite/>} />
<Route path="/items/:id" element={<ItemDetails />} />
<Route path="*" element={<NotFound/>}/>


  
 </Routes>

    
  )
}
