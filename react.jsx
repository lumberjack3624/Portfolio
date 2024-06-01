import React from 'react';

const Navigation = () => {
  return (
    <nav className="header__nav__menu mobile-menu">
      <ul>
        <li className="active">
          <a href="./index.html"><button>Home</button></a>
        </li>
        <li>
          <a href="./about.html"><button>About</button></a>
        </li>
        <li>
          <a href="./portfolio.html"><button>Portfolio</button></a>
        </li>
        <li>
          <a href="./services.html"><button>Services</button></a>
        </li>
        <li>
          <a href="#"><button>Pages</button></a>
          <ul className="dropdown">
            <li><a href="./about.html"><button>About</button></a></li>
            <li><a href="./portfolio.html"><button>Portfolio</button></a></li>
            <li><a href="./blog.html"><button>Blog</button></a></li>
            <li><a href="./blog-details.html"><button>Blog Details</button></a></li>
          </ul>
        </li>
        <li>
          <a href="./contact.html"><button>Contact</button></a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
