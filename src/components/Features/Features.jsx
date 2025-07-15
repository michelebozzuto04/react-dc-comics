import './Features.css'
import '../../index.css'
import digitalComics from '../../assets/img/digital-comics.png'
import merchandise from '../../assets/img/merchandise.png'
import shopLocator from '../../assets/img/shop-locator.png'
import subscriptions from '../../assets/img/subscriptions.png'
import powerVisa from '../../assets/img/power-visa.svg'

const features = [
    {
        img: digitalComics,
        title: "Digital comics"
    },
    {
        img: merchandise,
        title: "DC Merchandise"
    },
    {
        img: subscriptions,
        title: "Subscription"
    },
    {
        img: shopLocator,
        title: "Comic shop locator"
    },
    {
        img: powerVisa,
        title: "DC power visa"
    },
];

export default function Features() {
    return (
        <div className='featuresContainer'>
            <div className='container'>
                {features.map((feature, index) => {
                    return (
                        <div key={index} className='feature'>
                            <img className='img' src={feature.img} />
                            <span className='title'>{feature.title}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}