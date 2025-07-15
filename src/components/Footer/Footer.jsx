import './Footer.css'
import '../../index.css'
import logoBg from '../../assets/img/dc-logo-bg.png'

const dcComicsMenu = {
    title: 'DC comics',
    links: [
        {
            title: 'characters',
            href: '#'
        },
        {
            title: 'comics',
            href: '#'
        },
        {
            title: 'movies',
            href: '#'
        },
        {
            title: 'tv',
            href: '#'
        },
        {
            title: 'games',
            href: '#'
        },
        {
            title: 'videos',
            href: '#'
        },
        {
            title: 'fans',
            href: '#'
        },
        {
            title: 'news',
            href: '#'
        }
    ]
};

const dcMenu = {
    title: 'DC',
    links: [
        {
            title: 'terms of use',
            href: '#'
        },
        {
            title: 'privacy policy (new)',
            href: '#'
        },
        {
            title: 'ad choices',
            href: '#'
        },
        {
            title: 'advertising',
            href: '#'
        },
        {
            title: 'jobs',
            href: '#'
        },
        {
            title: 'subscriptions',
            href: '#'
        },
        {
            title: 'talent workshops',
            href: '#'
        },
        {
            title: 'CPSC certifications',
            href: '#'
        },
        {
            title: 'ratings',
            href: '#'
        },
        {
            title: 'show help',
            href: '#'
        },
        {
            title: 'Contact us',
            href: '#'
        }
    ]
};

const sitesMenu = {
    title: 'Sites',
    links: [
        {
            title: 'DC',
            href: '#'
        },
        {
            title: 'MAD magazine',
            href: '#'
        },
        {
            title: 'DC kids',
            href: '#'
        },
        {
            title: 'DC universe',
            href: '#'
        },
        {
            title: 'DC power visa',
            href: '#'
        }
    ]
}

const shopsMenu = {
    title: 'Shop',
    links: [
        {
            title: 'Shop DC',
            href: '#'
        },
        {
            title: 'Shop DC Collectibles',
            href: '#'
        }
    ]
}

function renderMenu(menuObj) {
    return (
        <div>
            <span className='list-title'>{menuObj.title}</span>
            <ul className='list'>
                {menuObj.links.map((link) => {
                    return (
                        <li><a className='list-item' href={link.href}>{link.title}</a></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default function Footer() {
    return (
        <>
            <div className="footerContainer">
                <div className='container'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='row'>
                                <div className='col-12'>
                                    {renderMenu(dcComicsMenu)}
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                    {renderMenu(shopsMenu)}
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            {renderMenu(dcMenu)}
                        </div>
                        <div className='col-4'>
                            {renderMenu(sitesMenu)}
                        </div>
                    </div>
                    <div className='logoBg'>
                        <img className='logoBgImg' src={logoBg} />
                    </div>
                </div>
            </div>
        </>
    )
}