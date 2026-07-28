
import fetchData from "../util/api";


import {useState,useRef} from "react"





export default function Searchbar(){


    const searchText = useRef()




    function handleSearch(e){

        e.preventDefault();
        searchText.current = searchText.current.value
        console.log(searchText.current)
        

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