import { NavLink } from "react-router-dom"


function NewBeer() {
  return (
    <div>
        <nav>
            <NavLink className={"navbar"} to={"/"}>Home</NavLink>
        </nav>
    </div>
  )
}

export default NewBeer