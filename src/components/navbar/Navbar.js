import React, { useState } from 'react';
import './navbar.css';
import { Search, ArrowDropDown } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    return (
        <div className={isScrolled ? "navbar_scrolled" : "navbar"}>
            <div class="container">
                <div class="left">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt="Netflix logo"
                    />
                    <NavLink to='/'><span>Home</span></NavLink>
                    <NavLink to='/series'><span>Series</span></NavLink>
                    <NavLink to='/movies'><span>Movies</span></NavLink>
                    <NavLink to='/new-and-popular'><span>New and Popular</span></NavLink>
                    <NavLink to='/my-list'><span>My list</span></NavLink>
                </div>

                <div class="right">
                    <Search className='icon' />
                    <span>Kid</span>
                    <NotificationsIcon className='icon' />
                    <Avatar className='icon' />
                    <div className='profile'>
                        <ArrowDropDown className='icon' />
                        <div className='options'>
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;