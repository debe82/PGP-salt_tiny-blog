import React, { useEffect, useState } from 'react';
import './App.css';
import { getPosts } from './api/dataManagement';
import Post from './component/Post';
import { IPost, argList } from './helper/models';

function App() {

  const [listOfPost, setListOfPost] = useState([]);
  const [argument, setArgument] = useState("magical")

  const fetchData  =async () => {
    const allPost = await getPosts();
    setListOfPost(allPost);
  }
  
  const toggleShowNews = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const argValue = e.target.value;
    setArgument(argValue);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Tiny Blog
      </header>
      <section className='post__section--container'>
        <section className='post__section--header'>
          <select className='post__section--header--selector' defaultValue="magical" onChange={(e)=> toggleShowNews(e)}>
            {argList.map(tag => <option value={tag}>{tag.toUpperCase()}</option>)}
          </select>
        </section>

        <section className='post__section--post'>
          {listOfPost.filter((a: IPost) => a.tags.includes(argument)).map((item: IPost, postIndex: number) => { 
            return <Post post={item} key={postIndex}/>
          })
          }
        </section>
      </section>  
    </div>
  );
}

export default App;
