import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="fixed top-0 w-full  text-white shadow-lg z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">DIASPORA IWACU</h1>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-300">Home</Link>
          <Link to="/about" className="hover:text-blue-300">About</Link>
          <Link to="/about" className="hover:text-blue-300">Activities</Link>
          <Link to="/contact" className="hover:text-blue-300">Contact Us</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <button className="hover:text-blue-300">Login</button>
          <button className="bg-white text-blue-900 px-4 py-2 rounded-lg hover:bg-blue-300">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
