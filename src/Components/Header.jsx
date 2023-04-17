import React from 'react';
import { NavLink } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            {/* Logo */}
            <h2>iSHOP</h2>

            {/* Different sections */}
            <div className='header-menu'>
                <div style={{marginRight: '10px'}}>
                    <NavLink to="/">Home</NavLink>
                </div>
                <div style={{marginRight: '10px'}}>
                    <NavLink to="/iphone">IPHONE</NavLink>
                </div>
                <div style={{marginRight: '10px'}}>
                    <NavLink to="/ipad">IPAD</NavLink>
                </div>
                <div style={{marginRight: '10px'}}>
                    <NavLink to="/macbook">MACBOOK</NavLink>
                </div>
                <div style={{marginRight: '10px'}}>
                    <NavLink to="/accesories">ACCESORIES</NavLink>
                </div>
            </div>

            {/* Search */}
            <div>
            </div>

            {/* Profile */}
            <div>
                <PersonOutlineIcon/>
            </div>

            {/* wishlist */}
            <div>
                <FavoriteBorderIcon/>
            </div>

            {/* Add to cart item */}
            <div>
                <ShoppingBagIcon/>
            </div>
        </div>
    )
}

export default Header