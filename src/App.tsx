import React, { useEffect, useState } from 'react';
import './App.css';
import { IArticle } from './helper/interfaces';
import { getArticles } from './api/dataManagement';

function App() {

  const [listOfArticles, setListOfArticles] = useState([]);
  const [showNews, setShowNews] = useState(true);
 
  const fetchData =async () => {
    console.log("fetchData()")
    const allArticles = await getArticles();
    setListOfArticles(allArticles);
  }
  
  const toggleShowNews = (value: boolean) => {
    setShowNews(value);
  }

  console.log("listOfArticles: ", listOfArticles);


  useEffect(() => {
    //fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Tiny Blog
      </header>
      <section className='section'>
        <section className='general'>
          <h3>Magical</h3>
          <select>
            <option value="true" onChange={()=> toggleShowNews(true)}>Show news</option>
            <option value="false" onChange={()=> toggleShowNews(false)}>Hide</option>
            </select>
        </section>
        {showNews ?
          <section className='news'>
          {listOfArticles.filter((a: IArticle) => a.tags.includes("magical")).map((item: IArticle, index: number) => {
            return (
              <section key={index} className='singleNews'>
                <h5 className='article-title'>{item.title}</h5>
                <div></div>
                <article className='article-body'>{item.body}</article>
                <div></div>
                <footer className='footer-tag'>
                  {item.tags.map((tag) => {
                    return (
                      <pre className='article-tags'>{tag} </pre>
                    )})

                  }
                </footer>
              </section>
            )

          })}
           


        </section>
        : null
        }



      </section>  
      <section className='section'>section2</section>
        <section className='filter'></section>
        <section className='news'></section>
      <section className='section'>section3</section>
        <section className='filter'></section>
        <section className='news'></section>
      <section className='section'>section4</section>
        <section className='filter'></section>
        <section className='news'></section>
      <section className='section'>section5</section>
        <section className='filter'></section>
        <section className='news'></section>
    </div>
  );
}

export default App;
