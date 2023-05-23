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
      <section className='section-container'>
        <section className='section-header'>
          <select className='section-selector' defaultValue="magical" onChange={(e)=> toggleShowNews(e)}>
            <option className='option-selector' value="magical">Magical</option>
            <option className='option-selector' value="mystery">Mystery</option>
            <option className='option-selector' value="crime">Crime</option>
            <option className='option-selector' value="fiction">Fiction</option>
            <option className='option-selector' value="history">History</option>
            <option className='option-selector' value="tag1">Tag1</option>
            <option className='option-selector' value="tag3">Tag3</option>
          </select>
        </section>

        <section className='section-articles'>
          {showNews ?
            <Article list={listOfArticles} argument={argument}/>
          : null
          }
        </section>
      </section>  
      <div></div>
    </div>
  );
}

export default App;
