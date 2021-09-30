import { Link } from "react-router-dom";

const Navbar = ({isLoggedIn}) => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        {isLoggedIn ? ("Hello UserName"): (<Link to="/auth">Sign in / Sign Up</Link>)}
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;