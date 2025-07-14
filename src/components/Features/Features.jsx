import './Features.css'
import '../../index.css'
import digitalComics from '../../assets/img/digital-comics.png'
import merchandise from '../../assets/img/merchandise.png'
import shopLocator from '../../assets/img/shop-locator.png'
import subscriptions from '../../assets/img/subscriptions.png'
import powerVisa from '../../assets/img/power-visa.svg'

export default function Features() {
    return (
        <div className='featuresContainer'>
            <div className='container'>
                <div className='feature'>
                    <img className='img' src={digitalComics} />
                    <span className='title'>Digital comics</span>
                </div>
                <div className='feature'>
                    <img className='img' src={merchandise} />
                    <span className='title'>DC merchandise</span>
                </div>
                <div className='feature'>
                    <img className='img' src={shopLocator} />
                    <span className='title'>Subscription</span>
                </div>
                <div className='feature'>
                    <img className='img' src={subscriptions} />
                    <span className='title'>Comic shop locator</span>
                </div>
                <div className='feature'>
                    <img className='img' src={powerVisa} />
                    <span className='title'>DC power visa</span>
                </div>
            </div>
        </div>
    )
}