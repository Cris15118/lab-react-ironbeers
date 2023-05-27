import { Link, useNavigate } from "react-router-dom";
import Homeimg from "../assets/home.png";
import { ClockLoader } from "react-spinners";
import { useEffect, useState } from "react";
import axios from "axios";

function RandomBeer() {
  const navigate = useNavigate();
  const [randomBeer, setRandomBeer] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      setRandomBeer(response.data);
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
    <div>
      <header>
        <Link className={"navbar"} to={"/"}>
          <img src={Homeimg} alt="home" height={"40"} />
        </Link>
      </header>
      <div>
        <img src={randomBeer.image_url} alt="beer" width={100} />
        <h2>
          {randomBeer.name} {randomBeer.attenuation_level}{" "}
        </h2>
        <h3>
          {randomBeer.tagline} {randomBeer.first_brewed}{" "}
        </h3>
        <p>{randomBeer.description} </p>
        <h6>{randomBeer.contributed_by} </h6>
      </div>
    </div>
  );
}

export default RandomBeer;
