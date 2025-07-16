import './FeatureItem.css'
import '../../../index.css'

export default function FeatureItem(props) {

    const { feature } = props;

    return (
        <div className='feature'>
            <img className='img' src={feature.img} />
            <span className='title'>{feature.title}</span>
        </div>
    )
}