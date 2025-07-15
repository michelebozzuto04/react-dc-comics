import logo from '../../assets/img/dc-logo.png'
import './Header.css'

const menu = [
    {
        href: '#',
        title: 'Characters',
        active: false
    },
    {
        href: '#',
        title: 'Comics',
        active: true
    },
    {
        href: '#',
        title: 'Movies',
        active: false
    },
    {
        href: '#',
        title: 'Tv',
        active: false
    },
    {
        href: '#',
        title: 'Games',
        active: false
    },
    {
        href: '#',
        title: 'Collectibles',
        active: false
    },
    {
        href: '#',
        title: 'Videos',
        active: false
    },
    {
        href: '#',
        title: 'Fans',
        active: false
    },
    {
        href: '#',
        title: 'News',
        active: false
    },
    {
        href: '#',
        title: 'Shop',
        active: false
    },
]

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