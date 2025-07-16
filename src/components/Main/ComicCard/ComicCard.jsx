import '../../../index.css'
import './ComicCard.css'

export default function ComicCard({ comic }) {
    return (
        <div key={comic.id} className='comicCard col-2'>
            <img className='comicImage' src={comic.thumb} />
            <span className='comicTitle'>{comic.title}</span>
        </div>
    )
}