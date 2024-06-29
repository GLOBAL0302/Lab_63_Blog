import { useCallback, useEffect, useState } from 'react';
import { UserInput } from '../../types.ts';
import axiosApi from '../../axiosApi.ts';
import { useNavigate, useParams } from 'react-router-dom';

const initialInputState = {
  title: '',
  description: '',
  dateTime: '',
};

const getDate = () => {
  const today = new Date();
  const date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  return date + ' ' + time;
};

const PostForm = () => {
  const [userInput, setUserInput] = useState<UserInput>(initialInputState);
  const [isLoading, setIsLoading] = useState(false)

  const { id } = useParams();
  const fetchPostData = useCallback(async () => {
    if (id) {
      const { data } = await axiosApi.get<UserInput | null>(`/posts/${id}`);
      setUserInput(data);
    }
  }, [id]);

  useEffect(() => {
    void fetchPostData();
  }, [fetchPostData]);

  const navigate = useNavigate();
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formSubmit = (event: React.FormEvent) => {
    setIsLoading(true)
    event.preventDefault();
    const toPost = {
      ...userInput,
      dateTime: getDate(),
    };
    try {
      if (!id) {
        axiosApi.post('/posts.json', toPost);
      } else {
        axiosApi.put(`/posts/${id}`, userInput);
      }
    } catch (e) {
      throw e;
    } finally {
      setUserInput(initialInputState);
      navigate('/');
      setIsLoading(false)
    }
  };

  return (
    <div className="border border-5 p-5">
      <h1 className="mb-3 link-offset-3">
        <i>{id ? 'Edit' : 'Add new Post'}</i>
      </h1>
      <div className="form">
        <form onSubmit={formSubmit} action="#">
          <div>
            <label htmlFor="title">
              <strong className="fs-3">Title:</strong>
            </label>
            <br />
            <input
              required
              onChange={onChangeInput}
              value={userInput.title}
              id="title"
              name="title"
              type="text"
              className="col-6"
            />
          </div>
          <div className="mt-5">
            <label htmlFor="description">
              <strong className="fs-3">Description:</strong>
            </label>
            <br />
            <input
              required
              value={userInput.description}
              onChange={onChangeInput}
              id="description"
              name="description"
              type="text"
              className="col-6"
            />
          </div>
          {isLoading?<div className="spinner-border mt-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div> :<button type="submit" className="btn btn-success mt-5 col-3 fs-4">
            {id ? 'Save Change' : 'Send Post'}
          </button> }
        </form>
      </div>
    </div>
  );
};

export default PostForm;
