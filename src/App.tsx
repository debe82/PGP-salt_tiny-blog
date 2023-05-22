import React, { useEffect, useState } from 'react';
import './App.css';
import { IArticle, Article, fakeArticle } from './helper/interfaces';
import { getArticles } from './api/dataManagement';

function App() {

  const [listOfArticles, setListOfArticles] = useState([]);
  const [fakeList, setFakeList] = useState<Article[]>([]);
  const [showNews, setShowNews] = useState(true);
 
  const fetchData  =async () => {
    console.log("fetchData()")
    const allArticles = await getArticles();
    setListOfArticles(allArticles);
  }

  const fillArticle = () => {
    let arrArticles: Article[] = [];
    for(let i=0; i < 10; i++) {
      arrArticles.push(fakeArticle);
    }
    setFakeList(arrArticles);
  }
  
  const toggleShowNews = () => {
    console.log("showNews", showNews);
    setShowNews(!showNews);
  }
  
  console.log("showNews", showNews);
  console.log("listOfArticles: ", listOfArticles);


  useEffect(() => {
    //fetchData();
    fillArticle();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Tiny Blog
      </header>
      <section className='section'>
        <section className='section-header'>
        <button className='section-selector' value="Magical" onClick={()=> toggleShowNews()}>Magical</button>
        </section>
        {showNews ?
          <section className='section-news'>
          {//listOfArticles.filter((a: IArticle) => a.tags.includes("magical")).map((item: IArticle, postIndex: number) => {
            fakeList.map((item: IArticle, postIndex: number) => {
            return (
              <section key={postIndex} className='singleNews'>
                <h5 className='article-title'>{item.title}</h5>
                <div></div>
                <article className='article-body'>{item.body}</article>
                <div></div>
                <footer className='footer-tag'>
                  {item.tags.map((tag: string, tagIndex: number) => {
                    return (
                      <pre key={tagIndex} className='article-tags'>{tag} </pre>
                    )})

                  }
                </footer>
              </section>
            )})}
          </section>
        : null
        }
      </section>  

      <section className='section'>
        <section className='section-header'>
          <h3>Mystery</h3>
          <select>
            <option value="true" onChange={()=> toggleShowNews()}>Show news</option>
          </select>
        </section>
        {showNews ?
          <section className='section-news'>
          {//listOfArticles.filter((a: IArticle) => a.tags.includes("mystery")).map((item: IArticle, index: number) => {
            fakeList.map((item: IArticle, index: number) => {
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
            )})}
          </section>
        : null
        }        
      </section>



      <section className='section'>
      <section className='section-header'>
          <h3>Crime</h3>
          <select>
            <option value="true" onChange={()=> toggleShowNews()}>Show news</option>
          </select>
        </section>
        {showNews ?
          <section className='section-news'>
          {//listOfArticles.filter((a: IArticle) => a.tags.includes("crime")).map((item: IArticle, index: number) => {
            fakeList.map((item: IArticle, index: number) => {
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
            )})}
          </section>
        : null
        }        
      </section>



      <section className='section'>
      <section className='section-header'>
          <h3>Fiction</h3>
          <select>
            <option value="true" onChange={()=> toggleShowNews()}>Show news</option>
          </select>
        </section>
        {showNews ?
          <section className='section-news'>
          {//listOfArticles.filter((a: IArticle) => a.tags.includes("fiction")).map((item: IArticle, index: number) => {
            fakeList.map((item: IArticle, index: number) => {
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
            )})}
          </section>
        : null
        }
      </section>



      <section className='section'>
        <section className='section-header'>
          <h3>History</h3>
          <select>
            <option value="true" onChange={()=> toggleShowNews()}>Show news</option>
          </select>
        </section>
        {showNews ?
          <section className='section-news'>
          {//listOfArticles.filter((a: IArticle) => a.tags.includes("history")).map((item: IArticle, index: number) => {
            fakeList.map((item: IArticle, index: number) => {
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
            )})}
          </section>
        : null
        }        
      </section>

    </div>
  );
}

export default App;
