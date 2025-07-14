import './Footer.css'
import logoBg from '../../assets/img/dc-logo-bg.png'

export default function Footer() {
    return (
        <div className="footerContainer">
            <div className='container'>
                <img className='logoBg' src={logoBg} />
            </div>
        </div>
    )
}