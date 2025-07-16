import logo from '../../assets/img/dc-logo.png'
import './Header.css'
import { menu } from '../../data/navigation/menus'

export default function Header() {
    return (
        <div className='header'>
            <div className="container">
                <img className='logo' src={logo} />
                <nav className='menu'>
                    {menu.map((menuItem, index) => {
                        return (
                            <div key={index} className={menuItem.active ? 'menu-link-container-active' : 'menu-link-container'}>
                                <a className={menuItem.active ? 'menu-link-active' : 'menu-link'} href={menuItem.href}>{menuItem.title}</a>
                            </div>
                        )
                    })}
                </nav>
            </div>
        </div>
    )
}