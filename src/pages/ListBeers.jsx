import { Link, useNavigate } from "react-router-dom"
import Homeimg from "../assets/home.png"
import axios from "axios"
import { useState } from "react"


function ListBeers() {
  const navigate = useNavigate()
  const {listado, setListado}= useState(null)


  const getData = async()=>{
    try{
      const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/beers")
        console.log(response)
    }catch(err){
      navigate("/error")
    }
  }
  return (
    <div>
      <header>
         <Link className={"navbar"} to={"/"}> <img src={Homeimg} alt="home" /> </Link>
         </header>


    </div>
  )
}

export default ListBeers