import './App.css';
import { format } from "date-fns";
import { Link } from 'react-router-dom'

export default function Post({ title, summary, cover, createdAt, author, name }) {
  return (
    <div className="post facebook-feed-post">
      <div className="post-header">
        <Link to={'/post/id'} className="post-author">
          <img src={'http://localhost:5000/' + author.profileImage} alt={author.name} className="author-image" />
          <div className="author-details">
            <span className="author-name">{author.name} @{author.username}</span>
            <span className="post-time">{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</span>
          </div>
        </Link>        
      </div>
      <div className="post-content">
        {cover && <img src={'http://localhost:5000/' + cover} alt="" className="post-image" />}
        <h2 className="post-title">{title}</h2>
        <p className="post-summary">{summary}</p>
      </div>
    </div>
  );
}









