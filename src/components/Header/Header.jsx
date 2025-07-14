import logo from '../../assets/img/dc-logo.png'
import './Header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className="container">
                <img className='logo' src={logo} />
                <nav className='menu'>
                    <div className='menu-link'>
                        <a>Characters</a>
                    </div>
                    <div className='menu-link-active'>
                        <a>Comics</a>
                    </div>
                    <div className='menu-link'>
                        <a>Movies</a>
                    </div>
                    <div className='menu-link'>
                        <a>Tv</a>
                    </div>
                    <div className='menu-link'>
                        <a>Games</a>
                    </div>
                    <div className='menu-link'>
                        <a>Collectibles</a>
                    </div>
                    <div className='menu-link'>
                        <a>Videos</a>
                    </div>
                    <div className='menu-link'>
                        <a>Fans</a>
                    </div>
                    <div className='menu-link'>
                        <a>News</a>
                    </div>
                    <div className='menu-link'>
                        <a>Shop</a>
                    </div>
                </nav>
            </div>
        </div>
    )
}