import { Post, UserInput } from '../../../types.ts';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import axiosApi from '../../../axiosApi.ts';

interface Props {
  post: Post;
}

const OnePost: React.FC<Props> = ({ post }) => {
  const [onePost, setOnePost] = useState<UserInput>();
  const { id } = useParams();
  const navigate = useNavigate()

  const deleteOnePost = async ()=>{
    axiosApi.delete(`/posts/${id}`)
    navigate("/")
  }

  let showOnePost;
  if (onePost) {
    showOnePost = (
      <div className='card mb-3 p-3'>
        <div className='card-header'>
          <p>Created on: {onePost.dateTime}</p>
        </div>
        <div className='card-body'>
          <p className='card-text fs-4'>{onePost.title}</p>
          <p className='card-text'>{onePost.description}</p>
        </div>
        <div className="d-flex gap-2">
          <NavLink to={`/posts/${id}/edit`} className="ms-auto btn btn-success col-1 fs-5">Edit</NavLink>
          <button
            onClick={deleteOnePost}
            className="btn btn-danger col-1 fs-5">Delete</button>
        </div>
      </div>);
  } else {
    let showOnePost = (<div>hello</div>);
  }


  const fetchPostData = useCallback(async () => {
    if (id) {
      const { data } = await axiosApi.get(`/posts/${id}`);
      setOnePost(data);
    }
  }, [id]);

  useEffect(() => {
    void fetchPostData();
  }, [fetchPostData]);

  return post ? (
    <>
      <div className='card mb-3 p-3'>
        <div className='card-header'>
          <p>Created on: {post.dateTime}</p>
        </div>
        <div className='card-body'>
          <p className='card-text fs-4'>{post.title}</p>
          <NavLink to={`/posts/${post.id}.json`}
                   className='btn btn-primary'>Read more</NavLink>
        </div>
      </div>
    </>
  ) : showOnePost;
};

export default OnePost;