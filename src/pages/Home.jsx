import "../styles/Home.css"

export default function Home(){


    return(
        <main>
            <Header text = "Discover New Products to Purchase"></Header>
        </main>
    )
}


function Header({text}){


    return (
      <header>
        <h1 class="headerText">{text}</h1>
      </header>
    );

}