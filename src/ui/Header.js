import { Link } from "react-router-dom";
import logo from "../logo.jpg"


function Header() {
  

  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-2 p-2 pb-0">
      <Link to="/"><img src={logo} alt="pizza" className="size-16 rounded-[50%] rotate-90"/></Link>
        <Link to="/"><h1 className="text-3xl text-orange-500 font-bold">Italian Pizza Store</h1></Link>
      </div>

      <ul className="flex items-center gap-8 text-xl text-orange-600 font-bold mr-2 p-2">
        <li>
          <Link to="/menu" className="hover:text-orange-400">Menu</Link>
        </li>
        <li>
          
          <Link to="/cart" className="hover:text-orange-400">Cart</Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-orange-400">Login</Link>
        </li>
      </ul>
     
    </header>
  );
}

export default Header;
