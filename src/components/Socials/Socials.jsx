import './Socials.css'
import '../../index.css'
import facebook from '../../assets/img/footer-facebook.png'
import twitter from '../../assets/img/footer-twitter.png'
import youtube from '../../assets/img/footer-youtube.png'
import pinterest from '../../assets/img/footer-pinterest.png'
import periscope from '../../assets/img/footer-periscope.png'

export default function Socials() {

    const socials = [
        facebook,
        twitter,
        youtube,
        pinterest,
        periscope,

    ];

    return (
        <div className='socialsContainer'>
            <div className='container'>
                <button className='btn'>Sign-up now!</button>

                <div className='socialsListSection'>
                    <span className='socialsText'>FOLLOW US</span>
                    <ul>
                        {socials.map((social, index) => {
                            return (
                                <img key={index} className='socialImg' src={social} />
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}