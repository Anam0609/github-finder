import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';   //imports links for the links in the navbar


// Navbar will contain four things(icon,title,the home link, About link)
const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}    
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Anam',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,     //makes sure the properties are strings
  icon: PropTypes.string.isRequired
};

export default Navbar;
