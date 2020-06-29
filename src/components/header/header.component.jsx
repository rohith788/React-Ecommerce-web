import React from 'react'

import './header.styles.scss'

import {Link} from 'react-router-dom'

// import {ReachComponent as Logo} from '../../assets/crown.svg'

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            LOGO          
        </Link>
        <div className='options' >
            <Link className='options' to='/shop'>
                SHOP
            </Link>
            <Link className='options' to='/shop'>
                CONTACT
            </Link>
        </div>
    </div>
)

export default Header;