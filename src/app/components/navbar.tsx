import Image from "next/image";
import Link from 'next/link';
import MySearch from './search';

const MyNavbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-left">
        <Image src="/logo.png" alt="Logo" width={70} height={70} />
        </div>
        <div className="navbar-center">
          <ul className="nav-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="./cities">Cities</Link>
              </li>
              <li>
                <Link href="./search">Search</Link>
              </li>
              <li>
                <Link href="./favorites">Favorites</Link>
              </li>
          </ul>
        </div>
        <div className="navbar-right">
          <MySearch />
        </div>
     
      </nav>
    );
  };

  export default MyNavbar;
  