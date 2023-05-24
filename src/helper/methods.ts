import { useState } from "react";
import { TArticle, fakeArticle, fakeArticle2 } from "./interfaces";



export const fillArticle = () => {

  const [fakeList, setFakeList] = useState<TArticle[]>([]);

  
  let arrArticles: TArticle[] = [];
  for(let i=0; i < 10; i++) {
    arrArticles.push(fakeArticle);
  }
  arrArticles.push(fakeArticle2);
  setFakeList(arrArticles);
}