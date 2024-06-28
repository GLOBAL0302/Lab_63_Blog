import { Post } from '../../types.ts';
import OnePost from './onePost/OnePost.tsx';

interface Props{
  posts:Post[]
}
const Posts:React.FC<Props> = ({posts}) => {
  return (
    <div>
      {posts.map((post)=>(
        <OnePost
          key={post.id}
          post={post}/>
      ))}
    </div>
  );
};

export default Posts;