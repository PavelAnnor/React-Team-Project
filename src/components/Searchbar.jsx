
import fetchData from "../util/api";


import {useState,useRef,useContext} from "react"
import { ProductContext } from "../util/context";





export default function Searchbar(){

    // const {items, setItems} = useContext(ProductContext)
   
    

    const searchText = useRef()




    async function handleSearch(e){

        e.preventDefault();
        const i =  await fetchData(searchText.current.value)
        setItems(i) 

    }
    return (
      <section className="searchbarSection">

        <form>

          <div className="searchbar">
            <img src = "./magnifying-glass.png"></img>
            <input placeholder="Search for An Item" ref = {searchText}></input>
          </div>

         
          <button onClick={handleSearch} className ="searchButton">Search</button>
        </form>
      </section>
    );


}