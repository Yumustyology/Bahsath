import React from 'react'
import '../styles/home.css'
// import {Link} from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps'
import {Avatar} from '@material-ui/core'
import { Link } from 'react-router-dom'
import Search from './search'
function Home() {
    return (
        <div className='home'>
            <div className='home__header'>
                <div className='header__left'>
                     <Link to='/about'>
                        About
                    </Link>
                    <Link to='/Store'>
                        Store
                    </Link>
                </div>
                <div className='header__right'>
                    <Link to='/gmail'>
                        Gmail
                    </Link>
                    <Link to='/images'>
                        Images
                    </Link>                  
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>

            <div className='home__body'>
                <img src='logo.png' alt='logo' />
                <div className='home__inputContainer'>
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home
