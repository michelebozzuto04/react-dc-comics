import './Main.css'
import '../../index.css'
import comics from '../../data/comics'

export default function Header() {

    return (
        <div className='mainContainer'>
            <div className='jumbotron'></div>
            <div className='container'>
                <span className='titleTag'>Current series</span>
                <div className='row'>
                    {comics.map((comic) => {
                        return (
                            <div key={comic.id} className='comicCard col-2'>
                                <img className='comicImage' src={comic.thumb} />
                                <span className='comicTitle'>{comic.title}</span>
                            </div>
                        )
                    })}
                </div>
                <button className='loadBtn'>Load more</button>
            </div>
        </div>
    )
}