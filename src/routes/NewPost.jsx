import axios from '../axios/config';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom'

import './NewPost.css'

const NewPost = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const createPost = async (e) => {
    e.preventDefault();

    const post = { title, body, userId: 1 };
    await axios.post('/posts', post);
    navigate('/');
  }

  return (
    <div className='new-post'>
      <h1>Novo Post</h1>
      <form onSubmit={(e) => createPost(e)}>
        <div className='form-control'>
          <label htmlFor='title'>Título:</label>
          <input type='text' id='title' name='title' placeholder='Digite o título' onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='form-control'>
          <label htmlFor='body'>Conteúdo:</label>
          <textarea id='body' name='body' placeholder='Digite o conteúdo' onChange={(e) => setBody(e.target.value)}></textarea>
        </div>
        <button type='submit' className='btn'>Criar Post</button>
      </form>
    </div>
  );
}

export default NewPost
