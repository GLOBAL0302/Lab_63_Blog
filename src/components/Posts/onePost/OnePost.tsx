
import { Post } from '../../../types.ts';
import { NavLink } from 'react-router-dom';

interface Props{
  post:Post
}
const OnePost:React.FC<Props> = ({post}) => {

  return (
   <>
     <div className="card mb-3">
       <div className="card-header">
         <p>Created on: {post.dateTime}</p>
       </div>
       <div className="card-body">
         <p className="card-text fs-4">{post.title}</p>
         <a
           className="btn btn-primary">Go somewhere</a>
       </div>
     </div>
   </>
  )
};

export default OnePost;