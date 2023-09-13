import './App.css';
import { format } from "date-fns";
import { Link } from 'react-router-dom'


import imagemPadrao from './images/Unicornio.png';

export default function Post({ summary, cover, createdAt, author, name }) {
  return (
    <div className="post facebook-feed-post">
      <div className="post-header">
        <Link to={'/post/id'} className="post-author">
          {cover ? (
            <img src={'http://localhost:5000/' + cover} alt={author.name} className="author-image" />
          ) : (
            <img src={imagemPadrao} alt="Imagem Padrão" className="author-image" />
          )}
          <div className="author-details">
            <span className="author-name">{author.name} @{author.username}</span>
            <span className="post-time">{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</span>
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









