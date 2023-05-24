
import { TArticle } from "../helper/models";
import '../App.css';

type Props = {
  article: TArticle
}

function Article(props: Props) {
  return(

    <section className='section-news'>
        <section className='singleNews'>
          <section className="section-label_title">
            <label className='article-title'>{props.article.title}</label>
          </section>
          <div></div>
          <article className='article-body'>{props.article.body}</article>
          <div></div>
          <footer className='footer-tag'>
            {props.article.tags.map((tag: string, tagIndex: number) => {
              return (
                <pre key={tagIndex} className='article-tags'>{tag} </pre>
              )})

            }
          </footer>
        </section>
    </section>

  )
}

export default Article;