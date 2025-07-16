import './Socials.css'
import '../../../index.css'

export default function Socials(props) {
    return (
        <div className='socialsContainer'>
            <div className='container'>
                <button className='btn'>Sign-up now!</button>

                <div className='socialsListSection'>
                    <span className='socialsText'>FOLLOW US</span>
                    <ul>
                        {props.socials.map((social, index) => {
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