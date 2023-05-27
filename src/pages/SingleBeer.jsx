import { Link, useNavigate, useParams } from "react-router-dom"
import Homeimg from "../assets/home.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { ClockLoader } from "react-spinners";

function SingleBeer() {
  const navigate =useNavigate();
  const params = useParams()
  const [details, setDetails] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const getData = async ()=>{

    try{
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`)
    //  console.log(response.data)
      setDetails(response.data)
      setIsLoading(false);
    }catch(err){
      navigate("/error")
    }
  }
useEffect(()=>{
  getData()
}, [params._id])

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
      <div>
        <img src= {details.image_url} alt="beer" width={100} />
        <h3>{details.name}  {details.attenuation_level} </h3>
        <p>{details.tagline}  {details.first_brewed}  </p> 
        <p>{details.description} </p>
        <p>{details.contributed_by} </p>

      </div>
    </div>
  )
}

export default SingleBeer