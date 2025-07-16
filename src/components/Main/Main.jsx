import './Main.css'
import '../../index.css'
import comics from '../../data/comics'
import ComicCard from './ComicCard/ComicCard'

export default function Header() {

    return (
        <div className='mainContainer'>
            <div className='jumbotron'></div>
            <div className='container'>
                <span className='titleTag'>Current series</span>
                <div className='row'>
                    {comics.map((comic) => {
                        return (
                            <ComicCard comic={comic} />
                        )
                    })}
                </div>
                <button className='loadBtn'>Load more</button>
            </div>
        </div>
    )
}