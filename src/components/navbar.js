import React from 'react';
import './navbar.css';

function Navbar(){
    return(
        <nav className='navbar'>
            <div className='elements'>
                <a href ="/"><button>Home</button></a>
                <a href ="/about"><button>About</button></a>
                <a href ="/signin"><button>Sign In</button></a>
            </div>
        </nav>
    );    
}

export default Navbar;