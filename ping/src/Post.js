/* eslint-disable jsx-a11y/anchor-is-valid */
// import './App.css';
// export default function Post({ title, summary, coven, content, createdAt, author
//  }){
//     return(
//         <div className = "post" >
//         <div className="image">
//           <img src="https://pbs.twimg.com/media/F4JbKHTWgAARUYu?format=jpg&name=medium" alt="" />
//         </div>
//         <div className="texts">
//           <h2> {title} </h2>
//           <p className="info">
//             <a className="author">{author} </a>
//             <time> {createdAt} </time>
//           </p>
//           <p className="summary"> {summary} </p>
//         </div>
//       </div >
//     );
// }

import './App.css';
import { format } from "date-fns";
import {Link} from 'react-router-dom'
export default function Post({ title, summary, cover, content, createdAt, author}) {
  return (
    <div className="post" >
      <div className="image">
        <Link to={'/post/id'} >
              <img src={'http://localhost:5000/' + cover} alt="" />
        </Link>
       
      </div>
      <div className="texts">
        <h2> {title} </h2>
        <p className="info">
          <a className="author">@{author.username}</a>
          <time>{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>
        </p>
        <p className="summary"> {summary} </p>
      </div>
    </div >
  );
}













// import { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { formatISO9075 } from "date-fns";
// import { UserContext } from "./UserContext";
// import { Link } from 'react-router-dom';

// export default function PostPage() {
//   const [postInfo, setPostInfo] = useState(null);
//   const { userInfo } = useContext(UserContext);
//   const { id } = useParams();
//   useEffect(() => {
//     // fetch(`http://localhost:5000/post/${id}`)
//     fetch(`http://localhost:5000/post`)
//       .then(response => {
//         response.json().then(postInfo => {
//           setPostInfo(postInfo);
//         });
//       });
//   }, []);

//   if (!postInfo) return '';

//   return (
//     <div className="post-page">
//       <h1>{postInfo.title}</h1>
//       <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
//       <div className="author">by @{postInfo.author.username}</div>
//       {userInfo.id === postInfo.author._id && (
//         <div className="edit-row">
//           <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
//             </svg>
//             Edit this post
//           </Link>
//         </div>
//       )}
//       <div className="image">
//         <img src={`http://localhost:5000/${postInfo.cover}`} alt="" />
//       </div>
//       <div className="content" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
//     </div>
//   );
// }



// import { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { UserContext } from "./UserContext";
// import { Link } from 'react-router-dom'; 

// export default function Post() {
//   const [postInfo, setPostInfo] = useState(null);
//   const { userInfo } = useContext(UserContext);
//   const { id } = useParams();
//   useEffect(() => {
//     fetch(`http://localhost:5000/post`)
//       .then(response => {
//         response.json().then(postInfo => {
//           setPostInfo(postInfo);
//         });
//       });
//   }, []);

//   if (!postInfo) return '';

//   return (
//     <div className = "post" >
//         <div className="image">
//           <img src="https://pbs.twimg.com/media/F4JbKHTWgAARUYu?format=jpg&name=medium" alt="" />
//         </div>
//         <div className="texts">
//           <h2>This week's shrine is Flip-Flop, Made for This, A Nurse's Calling and Stridor.</h2>
//           <p className="info">
//             <a className="author">Marshall.Liu</a>
//             <time>2023-24-08 15:30</time>
//           </p>
//           <p className="summary">#DeadbyDaylight is an asymmetrical multiplayer horror game by
//             @Behaviour. Now available everywhere.</p>
//         </div>
//       </div >
//   );
// }