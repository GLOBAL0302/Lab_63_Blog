import { useState } from 'react';
import { userInput } from '../../types.ts';
import axiosApi from '../../axiosApi.ts';


const initialInputState = {
  title:"",
  description:"",
  dateTime:""
}

const getDate = ()=>{
  const today = new Date();
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return date + ' ' + time
}

const PostForm = () => {
  const [userInput, setUserInput] = useState<userInput>(
    initialInputState
  )

  const onChangeInput = (event:React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = event.target
    setUserInput((prevState)=>({
      ...prevState,
      dateTime:getDate(),
      [name]:value
    }))
  }

  const formSubmit = (event:React.FormEvent)=>{
    event.preventDefault()
    try {
      axiosApi.post("/posts.json", userInput)
    }finally {
      setUserInput(initialInputState)
    }
  }



  return (
    <div className="border border-5 p-5">
      <h1 className="mb-3 link-offset-3"><i>Add new Post</i></h1>
      <div className="form">
        <form
          onSubmit={formSubmit}
          action='#'>
          <div>
            <label htmlFor='title'><strong className="fs-3">Title:</strong></label>
            <br/>
            <input
              onChange={onChangeInput}
              value={userInput.title}
              id="title"
              name="title"
              type='text'
              className="col-6"/>
          </div>
          <div className="mt-5">
            <label htmlFor='description'><strong className="fs-3">Description:</strong></label>
            <br/>
            <input
              value={userInput.description}
              onChange={onChangeInput}
              id="description"
              name="description"
              type='text'
              className="col-6"
            />
          </div>
          <button
            type="submit"
            className="btn btn-success mt-5 col-3 fs-4">
            Send Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostForm;