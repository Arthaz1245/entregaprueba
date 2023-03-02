import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Link to="/">My blog</Link>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">register</Link>
      </nav>
    </header>
  );
};

export default Header;
