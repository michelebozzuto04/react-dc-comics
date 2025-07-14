import './Main.css'
import '../../index.css'

export default function Header() {

    const placeholder = "--> Content goes here <--";

    return (
        <div className='mainContainer'>
            <div className='container'>
                <span>{placeholder}</span>
            </div>
        </div>
    )
}