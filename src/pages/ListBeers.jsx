import { Link, useNavigate } from "react-router-dom";
import Homeimg from "../assets/home.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { ClockLoader } from "react-spinners";

function ListBeers() {
  const navigate = useNavigate();
  const [listado, setListado ] = useState();
  const [isLoading, setIsLoading]   = useState(true);

  const getData = async () => {
    
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
     // console.log(response);
      setListado(response.data);
      setIsLoading(false);
    } catch (err) {
      navigate("/error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading === true ) {
    return (
      <div>
        <ClockLoader />
      </div>
    );
  }

  return (
    <div>
      <header>
        <Link className={"navbar"} to={"/"}>
          <img src={Homeimg} alt="home" width={"40"} />
        </Link>
      </header>
      <h3>Listado de Cervezas</h3>

      {listado.map((eachBeer) => {
        return (
          <div key={eachBeer._id}>
            <img src={eachBeer.image_url} alt="beer" width={100} />
            <h5>
              <Link to={`/beers/${eachBeer._id}`}> {eachBeer.name} </Link>{" "}
            </h5>
            <p>{eachBeer.tagline} </p>
            <p>Created by: {eachBeer.contributed_by} </p>
          </div>
        );
      })}
    </div>
  );
}

export default ListBeers;
