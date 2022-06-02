import { Link } from "react-router-dom";
import StyledNavbar from "./navbar.styled";

function Navbar() {
  return (
    <StyledNavbar>
      <nav>
        <>
          <h1>Moviee</h1>
        </>
        <>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movie/create">Add Movie</Link>
            </li>
            <li>
              <Link to="/movie/popular">Popular</Link>
            </li>
            <li>
              <Link to="/movie/now">Now Playing</Link>
            </li>
            <li>
              <Link to="/movie/top">Top Rated</Link>
            </li>
          </ul>
        </>
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;
