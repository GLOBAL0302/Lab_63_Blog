
import { Post } from '../../../types.ts';
import { NavLink, useParams } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import axiosApi from '../../../axiosApi.ts';

interface Props{
  post:Post
}
const OnePost:React.FC<Props> = ({post}) => {
  const {id} = useParams()
  let showOnePost = (<div>Hello</div>)

  const fetchPostData = useCallback(async ()=>{
    if (id){
      const {data} = await axiosApi.get(`/posts/${id}`)
      console.log(data);
      showOnePost = (<div>{data.dateTime}</div>)
    }
  },[id])

  useEffect(() => {
    void fetchPostData()
  }, [fetchPostData]);

  return post? (
   <>
     <div className="card mb-3">
       <div className="card-header">
         <p>Created on: {post.dateTime}</p>
       </div>
       <div className="card-body">
         <p className="card-text fs-4">{post.title}</p>
         <NavLink to={`/posts/${post.id}.json`}
           className="btn btn-primary">Read more</NavLink>
       </div>
     </div>
   </>
  ):showOnePost
};

export default OnePost;