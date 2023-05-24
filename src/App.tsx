import React, { useEffect, useState } from 'react';
import './App.css';
import { getArticles } from './api/dataManagement';
import Article from './component/Article';

function App() {

  const [listOfArticles, setListOfArticles] = useState([]);
  const [argument, setArgument] = useState("magical")

  const fetchData  =async () => {
    console.log("fetchData()");
    const allArticles = await getArticles();
    console.log("allArticles: ", allArticles);
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
      <section className='section-container'>
        <section className='section-header'>
          <select className='section-selector' defaultValue="magical" onChange={(e)=> toggleShowNews(e)}>
            <option className='option-selector' value="magical">Magical</option>
            <option className='option-selector' value="mystery">Mystery</option>
            <option className='option-selector' value="crime">Crime</option>
            <option className='option-selector' value="fiction">Fiction</option>
            <option className='option-selector' value="history">History</option>
          </select>
        </section>

        <section className='section-articles'>
          <Article list={listOfArticles} argument={argument}/>
        </section>
      </section>  
      <div></div>
    </div>
  );
}

export default App;
