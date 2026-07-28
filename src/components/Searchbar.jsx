


export default function Searchbar(){



    function handleSearch(e){

        e.preventDefault();

    }
    return (
      <section className="searchbarSection">

        <form>

          <div className="searchbar">
            <img src = "./magnifying-glass.png"></img>
            <input placeholder="Search for An Item"></input>
          </div>

         
          <button onClick={handleSearch} className ="searchButton">Search</button>
        </form>
      </section>
    );


}