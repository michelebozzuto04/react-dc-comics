import './Main.css'
import '../../index.css'
import ComicCard from './ComicCard/ComicCard'

export default function Header(props) {

    return (
        <div className='mainContainer'>
            <div className='jumbotron'></div>
            <div className='container'>
                <span className='titleTag'>Current series</span>
                <div className='row'>
                    {props.data.map((comic) => {
                        return (
                            <ComicCard key={comic.id} comic={comic} />
                        )
                    })}
                </div>
                <button className='loadBtn'>Load more</button>
            </div>
        </div>
    )
}