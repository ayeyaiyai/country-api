import '../styles/Header.css';
import moonIcon from '../images/moon-outline.svg';

function Header() {
    return (
        <div className='header-container'>  
            <div className='header-body'>
                <div className='header-left'>Where in the world?</div>
                <div className='header-right'>
                    <div className='moon-icon-container'>
                        <img src={moonIcon} alt='moon icon' className='moon-icon'/>
                    </div>
                    <div className='dark-mode'>Dark Mode</div>
                </div>
            </div>
        </div>
    )
}

export default Header;