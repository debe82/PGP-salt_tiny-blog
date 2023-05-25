import React, { useEffect, useState } from 'react';
import './App.css';
import { getArticles } from './api/dataManagement';
import Article from './component/Article';
import { IArticle, argList } from './helper/models';

function App() {

  const [listOfArticles, setListOfArticles] = useState([]);
  const [argument, setArgument] = useState("magical")

  const fetchData  =async () => {
    const allArticles = await getArticles();
    setListOfArticles(allArticles);
  }
  
  const toggleShowNews = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const argValue = e.target.value;
    setArgument(argValue);
  }

  useEffect(() => {
    fetchData();
  }, [argument]);

  return (
    <div className="App">
      <header className="App-header">
        Tiny Blog
      </header>
      <section className='articles__section--container'>
        <section className='articles__section--header'>
          <select className='articles__section--header--selector' defaultValue="magical" onChange={(e)=> toggleShowNews(e)}>
            {argList.map(tag => <option value={tag}>{tag.toUpperCase()}</option>)}
          </select>
        </section>

        <section className='articles__section--articles'>
          {listOfArticles.filter((a: IArticle) => a.tags.includes(argument)).map((item: IArticle, postIndex: number) => { 
            return <Article article={item} key={postIndex}/>
          })
          }
        </section>
      </section>  
    </div>
  );
}

export default App;
