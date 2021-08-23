import { Link } from 'react-router-dom';

// Styles
import './styles/Header.css';

export default function Header() {
  return (
    <header className='header'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">Navbar</Link>
        
        <div className='links'>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}