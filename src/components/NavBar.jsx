import { Link } from "react-router-dom";

function NavBar() {
    return(

        <nav className= "navbar navbar-expand-lg navbar-light bg-light fs-4 fw-2 bg-dark">
            <div className="navbar-nav">
                <Link to="/" className="nav-item nav-link text-white me-2"> Home </Link>
            </div>
        </nav>
    )
}
export default NavBar