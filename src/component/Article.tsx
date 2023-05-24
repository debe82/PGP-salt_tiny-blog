
import { IArticle, TArticle } from "../helper/interfaces";
import '../App.css';

type Props = {
  argument: string,
  list: TArticle[]
}

function Article(props: Props) {
  return(

    <section className='section-news'>
    {props.list.filter((a: IArticle) => a.tags.includes(props.argument)).map((item: IArticle, postIndex: number) => {
      //props.list.filter((a: IArticle) => a.tags.includes(props.argument)).map((item: TArticle, postIndex: number) => {
        console.log("item: ", item);
        return (
        <section key={postIndex} className='singleNews'>
          <section className="section-label_title">
            <label className='article-title'>{item.title}</label>
          </section>
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

  )
}

export default Article;