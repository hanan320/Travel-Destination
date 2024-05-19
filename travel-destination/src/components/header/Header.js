import './Header.css';
import Navbar from '../navbar/Navbar';
function Header() {
    return (
        <>
            <div className="header">
                <i class="fa-solid fa-passport"> Travel Destinations </i>

                <div className='home-link'><Navbar /></div>

            </div>
        </>
    );
}

export default Header;