import React, { useState } from 'react';
import '../styles/Header.css';
import moonIcon from '../images/moon-outline.svg';

function Header({ toggleDarkMode, darkMode }) {
    

    return (
        <div className={`header-container ${darkMode ? 'dark-mode' : ''}`}>
            <div className='header-body'>
                <div className='header-left'>Where in the world?</div>
                <div className='header-right' onClick={toggleDarkMode}>
                    <div className='moon-icon-container'>
                        <img src={moonIcon} alt='moon icon' className={`moon-icon ${darkMode ? 'white-icon' : ''}`}/>
                    </div>
                    <div className='dark-mode-text'>{darkMode ? 'Light Mode' : 'Dark Mode'}</div>
                </div>
            </div>
        </div>
    );
}

export default Header;