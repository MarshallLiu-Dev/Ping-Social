/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import { format } from "date-fns";
import {Link} from 'react-router-dom'
export default function Post({ title, summary, cover, createdAt, author, name }) {
  return (
    <div className="post" >
      <div className="image">
        <Link to={'/post/id'} >
              <img src={'http://localhost:5000/' + cover} alt="" />
        </Link>
       
      </div>
      <div className="texts">
        {/* <a className="author">@{author.username}</a> */}
        <Link to={'/post/id'} >
         <a className="author">{author.name}    @{author.username}</a>
        </Link>
        <h2> {title} </h2>
        <p className="info">
          <p className="summary"> {summary} </p>
        </p>
        <time>{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>
      </div>
    </div >
  );
}










