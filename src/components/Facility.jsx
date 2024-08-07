import { Link } from "react-router-dom"
import Button from "./Button"

const Facility = () => {
  return (
      <section>
          <div>
              <h1>we do our best to ensure we provide <br />necessary facilities for you</h1>
              <p>Discover your ideal apartment: Find your perfect stay at Shortmennt Service Apartments</p>
              <Link to="/signup"><Button/></Link>
          </div>
    </section>
  )
}

export default Facility