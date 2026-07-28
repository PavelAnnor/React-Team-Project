
import fetchData from "../util/api";


import {useState,useRef,useContext} from "react"
import { ProductContext } from "../util/context";





export default function Searchbar(){

    // const {prodcuts, setProducts} = useContext(ProductContext)
    

    const searchText = useRef()




    function handleSearch(e){

        e.preventDefault();
        
        

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