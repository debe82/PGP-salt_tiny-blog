
import { TArticle } from "../helper/models";
import '../App.css';

type Props = {
  article: TArticle
}

function Article(props: Props) {
  return(

    <section className='section__news'>
        <section className='section__news--article'>
          <section className="section__news--article--title">
            <label className='article__title'>{props.article.title}</label>
          </section>
          <div></div>
          <article className='article__body'>{props.article.body}</article>
          <div></div>
          <footer className='article__tags'>
            {props.article.tags.map((tag: string, tagIndex: number) => {
              return (
                <pre key={tagIndex} className='article__tags--tags'>{tag} </pre>
              )})

            }
          </footer>
        </section>
    </section>

  )
}

export default Article;