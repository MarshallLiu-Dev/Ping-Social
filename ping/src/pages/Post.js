/* eslint-disable no-unused-vars */
import '../App.css';
import { format, formatDistance,formatRelative, subDays } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Link } from 'react-router-dom'
import imagemPadrao from '../images/Unicornio.png';

export default function Post({ summary, cover, createdAt, author, name }) {
  

  return (
    <div className="post facebook-feed-post">
      <div className="post-header">
        <Link to={'/edit-post/:postId'} className="post-author">
          {cover ? (
            <img src={'http://localhost:5000/' + cover} alt={author.name} className="author-image" />
          ) : (
            <img src={imagemPadrao} alt="Imagem Padrão" className="author-image" />
          )}
          <div className="author-details">
            <span className="author-name">{author.name} @{author.username}</span>
            <span className="post-time">
              {/* {formatRelative(subDays(new Date(), 3), new Date(), {locale: ptBR })} */}
              {/* {formatRelative(subDays(new Date(createdAt), 0), new Date(createdAt), {locale: ptBR })} */}
              {format(new Date(createdAt),'HH:mm  d MMM  yyyy ')}
            </span>
          </div>
        </Link>
      </div>
      <div className="post-content">
        <p className="post-summary">{summary}</p>
        {cover && <img src={'http://localhost:5000/' + cover} alt="" className="post-image" />}
      </div>
    </div>
  );
}





