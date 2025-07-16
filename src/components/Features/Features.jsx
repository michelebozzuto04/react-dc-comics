import './Features.css'
import '../../index.css'
import FeatureItem from './FeatureItem/FeatureItem'

export default function Features(props) {
    return (
        <div className='featuresContainer'>
            <div className='container'>
                {props.features.map((feature, index) => {
                    return (
                        <FeatureItem key={index} feature={feature} />
                    )
                })}
            </div>
        </div>
    )
}