import './Footer.css'
import '../../index.css'
import logoBg from '../../assets/img/dc-logo-bg.png'

function renderMenu(menuObj) {
    return (
        <div>
            <span className='list-title'>{menuObj.title}</span>
            <ul className='list'>
                {menuObj.links.map((link, index) => {
                    return (
                        <li key={index}><a className='list-item' href={link.href}>{link.title}</a></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default function Footer(props) {
    return (
        <>
            <div className="footerContainer">
                <div className='container'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='row'>
                                <div className='col-12'>
                                    {renderMenu(props.menu.dcComicsMenu)}
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                    {renderMenu(props.menu.shopsMenu)}
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            {renderMenu(props.menu.dcMenu)}
                        </div>
                        <div className='col-4'>
                            {renderMenu(props.menu.sitesMenu)}
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