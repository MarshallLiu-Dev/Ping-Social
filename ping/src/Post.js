/* eslint-disable jsx-a11y/anchor-is-valid */
// import './App.css';
// import { format } from "date-fns";
// import { Link } from 'react-router-dom'

// export default function Post({ title, summary, cover, createdAt, author, name }) {
//   return (
//     <div className="post">
//       <div className="image">
//         <Link to={'/post/id'} >
//           {cover && <img src={'http://localhost:5000/' + cover} alt="" />}
//         </Link>
//       </div>
//       <div className="texts">
//         <Link to={'/post/id'} >
//           <a className="author">{author.name}    @{author.username}</a>
//         </Link>
//         <h2> {title} </h2>
//         <p className="info">
//           <p className="summary"> {summary} </p>
//         </p>
//         <time>{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>
//       </div>
//     </div>
//   );
// }

// import './App.css';
// import { format } from "date-fns";
// import { Link } from 'react-router-dom'

// export default function Post({ title, summary, cover, createdAt, author, name }) {
//   return (
//     <div className="post facebook-feed-post">
//       <div className="post-header">
//         <Link to={'/post/id'} className="post-author">
//           <img src={'http://localhost:5000/' + author.profileImage} alt={author.name} className="author-image" />
//           <div className="author-details">
//             <span className="author-name">{author.name}  @{author.username}</span>
//             <span className="post-time">{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</span>
//           </div>
//         </Link>
//         {/* <div className="post-actions">
//           <button className="like-button">Like</button>
//           <button className="comment-button">Comment</button>
//         </div> */}
//       </div>
//       <div className="post-content">
//         {cover && <img src={'http://localhost:5000/' + cover} alt="" className="post-image" />}
//         <h2 className="post-title">{title}</h2>
//         <p className="post-summary">{summary}</p>
//       </div>
//     </div>
//   );
// }

import './App.css';
import { format } from "date-fns";
import { Link } from 'react-router-dom'

export default function Post({ title, summary, cover, createdAt, author, name }) {
  return (
    <div className="post facebook-feed-post">
      <div className="post-header">
        <Link to={'/post/id'} className="post-author">
          {/* <img src={'http://localhost:5000/' + author.profileImage} alt={author.name} className="author-image" /> */}
          <div className="author-details">
            <span className="author-name">{author.name} @{author.username}</span>
            <span className="post-time">{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</span>
          </div>
        </Link>
        {/* <div className="post-actions">
          <button className="like-button">Like</button>
          <button className="comment-button">Comment</button>
        </div> */}
      </div>
      <div className="post-content">
        {cover && <img src={'http://localhost:5000/' + cover} alt="" className="post-image" />}
        <h2 className="post-title">{title}</h2>
        <p className="post-summary">{summary}</p>
      </div>
    </div>
  );
}









