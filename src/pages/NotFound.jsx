import { Link } from "react-router-dom"

function NotFound() {
    return (
      <div>
        <h3>Estas perdido</h3>
        <h4>Vuelve a Home</h4>
        <Link to={"/"}>Home</Link>
      </div>
    )
  }
  
  export default NotFound