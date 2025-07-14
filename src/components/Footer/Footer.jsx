import './Footer.css'
import '../../index.css'
import logoBg from '../../assets/img/dc-logo-bg.png'

export default function Footer() {
    return (
        <>
            <div className="footerContainer">
                <div className='container'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='row'>
                                <div className='col-12'>
                                    <span className='list-title'>DC comics</span>
                                    <ul className='list'>
                                        <li><a className='list-item' href='#'>Characters</a></li>
                                        <li><a className='list-item' href='#'>Comics</a></li>
                                        <li><a className='list-item' href='#'>Movies</a></li>
                                        <li><a className='list-item' href='#'>TV</a></li>
                                        <li><a className='list-item' href='#'>Games</a></li>
                                        <li><a className='list-item' href='#'>Videos</a></li>
                                        <li><a className='list-item' href='#'>News</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                    <span className='list-title'>Shop</span>
                                    <ul className='list'>
                                        <li><a className='list-item' href='#'>Shop DC</a></li>
                                        <li><a className='list-item' href='#'>Shop DC Collectibles</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <span className='list-title'>DC</span>
                            <ul className='list'>
                                <li><a className='list-item' href='#'>Terms Of Use</a></li>
                                <li><a className='list-item' href='#'>Privacy Policy (New)</a></li>
                                <li><a className='list-item' href='#'>Ad Choices</a></li>
                                <li><a className='list-item' href='#'>Advertising</a></li>
                                <li><a className='list-item' href='#'>Jobs</a></li>
                                <li><a className='list-item' href='#'>Subscriptions</a></li>
                                <li><a className='list-item' href='#'>Talent Workshops</a></li>
                                <li><a className='list-item' href='#'>CPSC Certifications</a></li>
                                <li><a className='list-item' href='#'>Ratings</a></li>
                                <li><a className='list-item' href='#'>Show Help</a></li>
                                <li><a className='list-item' href='#'>Contact Us</a></li>
                            </ul>
                        </div>
                        <div className='col-4'>
                            <span className='list-title'>Sites</span>
                            <ul className='list'>
                                <li><a className='list-item' href='#'>DC</a></li>
                                <li><a className='list-item' href='#'>MAD Magazine</a></li>
                                <li><a className='list-item' href='#'>DC Kids</a></li>
                                <li><a className='list-item' href='#'>DC Universe</a></li>
                                <li><a className='list-item' href='#'>DC Power Visa</a></li>
                            </ul>
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