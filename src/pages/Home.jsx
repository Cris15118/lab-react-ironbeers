import { Link } from "react-router-dom"
import beerImg from "../assets/beers.png"
import newBeerImg from "../assets/new-beer.png"
import randomBeerImg from "../assets/random-beer.png"

function Home() {
  return (
    <div>
           


        <img src={beerImg} alt="beers" />
        <Link to={"/beers"}>All Beers</Link>
        <p>Una alta variedad de cervezas de todos los sabores, texturas y de todas las partes del mundo</p>

        <img src={randomBeerImg} alt="beer" />
        <Link to={"/random-beer"}>Random Beer</Link>
        <p>Dale al link y dejate sorprender!!</p>

        <img src={newBeerImg} alt="beer" />
        <Link to={"/new-beer"}>New Beer</Link>
        <p>Añade las cervezas que te gustaría encontrar en nuestro listado</p>


    </div>
  )
}

export default Home