import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Lamba Blog site</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#2ea6ef",
            borderRadius: "8px",
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
