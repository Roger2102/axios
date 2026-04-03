import axios from '../axios/config';

import  { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async() => {
        
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const data = response.data;

            console.log(data);

            setPosts(data);
            } catch (error) {
            console.error('Erro ao buscar os posts:', error);
        }

    }

    useEffect(() => {

    getPosts();

    }, []);

  return (
    <div className='home'>
      <h1>Últimos Posts</h1>
      {posts.length === 0 ? ( <p>Carregando...</p> ) : (
        posts.map((post) => (
          <div className='post' key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className='btn'>Ver detalhes</Link>
          </div>
        ))
      )}
      <p>Bem-vindo ao projeto com Axios!</p>
    </div>
  );
}

export default Home
