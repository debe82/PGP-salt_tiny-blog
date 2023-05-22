import React, { useEffect, useState } from 'react';
import './App.css';
import { IArticle, TArticle, fakeArticle, fakeArticle2 } from './helper/interfaces';
import { getArticles } from './api/dataManagement';
import Article from './component/Article';

function App() {

  const [listOfArticles, setListOfArticles] = useState([]);
  const [argument, setArgument] = useState("magical")
  const [fakeList, setFakeList] = useState<TArticle[]>([]);
  const [showNews, setShowNews] = useState(true);

  const fetchData  =async () => {
    console.log("fetchData()");
    const allArticles = await getArticles();
    console.log("allArticles: ", allArticles);
    setListOfArticles(allArticles);
  }

  const fillArticle = () => {
    let arrArticles: TArticle[] = [];
    for(let i=0; i < 10; i++) {
      arrArticles.push(fakeArticle);
    }
    arrArticles.push(fakeArticle2);
    setFakeList(arrArticles);
  }
  
  const toggleShowNews = (e: any) => {
    const argValue = e.target.value;
    setArgument(argValue);
  }

  useEffect(() => {
    fetchData();
    //fillArticle();
  }, [argument]);

  return (
    <div className="App">
      <header className="App-header">
        Tiny Blog
      </header>
      <section className='section-articles'>
        <section className='section-header'>
          <select defaultValue="magical" onChange={(e)=> toggleShowNews(e)}>
            <option className='section-selector' value="magical">Magical</option>
            <option className='section-selector' value="mystery">Mystery</option>
            <option className='section-selector' value="crime">Crime</option>
            <option className='section-selector' value="fiction">Fiction</option>
            <option className='section-selector' value="history">History</option>
            <option className='section-selector' value="tag3">Tag3</option>
          </select>
        </section>
        {showNews ?
          <Article list={listOfArticles} argument={argument}/>
        : null
        }
      </section>  


    </div>
  );
}

export default App;
