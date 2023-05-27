import { Link } from "react-router-dom";
import beerImg from "../assets/beers.png";
import newBeerImg from "../assets/new-beer.png";
import randomBeerImg from "../assets/random-beer.png";

function Home() {
  return (
    <div>
      
         <img className="container-img" src={beerImg} alt="beers" />
      
     
      <Link className="link-beer" to={"/beers"}>All Beers</Link>
      <p>
        Una alta variedad de cervezas de todos los sabores, texturas y de todas
        las partes del mundo
      </p>
     
        <img  className="container-img" src={randomBeerImg} alt="beer" />
     

      
      <Link className="link-beer" to={"/random-beer"}>Random Beer</Link>
      <p>Dale al link y dejate sorprender!!</p>
    
         <img  className="container-img" src={newBeerImg} alt="beer" />
      

     
      <Link className="link-beer" to={"/new-beer"}>New Beer</Link>
      <p>Añade las cervezas que te gustaría encontrar en nuestro listado</p>
    </div>
  );
}

export default Home;
