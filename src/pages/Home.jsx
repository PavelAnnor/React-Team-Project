import "../styles/Home.css"
import Searchbar from "../components/Searchbar";

export default function Home(){


    return (
      <main>
        <Header text="Discover New Products to Purchase"></Header>
        <Searchbar></Searchbar>
      </main>
    );
}


function Header({text}){


    return (
      <header>
        <h1 class="headerText">{text}</h1>
      </header>
    );

}