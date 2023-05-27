import { Link, useNavigate } from "react-router-dom";
import Homeimg from "../assets/home.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { ClockLoader } from "react-spinners";

function ListBeers() {
  const navigate = useNavigate();
  const [listado, setListado] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput]= useState("")

  const handleSearchChange = (event)=> setSearchInput(event.target.value)

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      const search = await axios.get ("https://ih-beers-api2.herokuapp.com/beers/search?q={query}")
      // console.log(response);
      setListado(response.data);
      setSearchInput(search.data)
      setIsLoading(false);
    } catch (err) {
      navigate("/error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading === true) {
    return (
      <div>
        <ClockLoader />
      </div>
    );
  }

  return (
    <div >
      <header>
        <Link className={"navbar"} to={"/"}>
          <img src={Homeimg} alt="home" width={"40"} />
        </Link>
      </header>
      <h3>Listado de Cervezas</h3>
   
      <input type="text" name="search" value={searchInput} onChange={handleSearchChange} />
 <div className="container">
      {listado.map((eachBeer) => {
        return (
          <div className="cada-beer" key={eachBeer._id}>
            <div className="image-list">
            <img src={eachBeer.image_url} alt="beer" width={50} />
            </div>
            <h5>
              <Link to={`/beers/${eachBeer._id}`}> {eachBeer.name} </Link>{" "}
            </h5>
            <p>{eachBeer.tagline} </p>
            <p>Created by: {eachBeer.contributed_by} </p>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default ListBeers;
