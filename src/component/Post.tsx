
import { IPost } from "../helper/models";
import '../App.css';
import { useEffect } from "react";

interface IPostProps  {
  post: IPost
}

function Post({post}: IPostProps) {
  return(


    <section className='section__news'>
        <section className='section__news--post'>
          <section className="section__news--post--title">
            <label className='post__title'>{post.title}</label>
          </section>
          <div></div>
          <article className='post__body'>{post.body}</article>
          <div></div>
          <footer className='post__tags'>
            {post.tags.map((tag: string, tagIndex: number) => {
              return (
                <pre key={tagIndex} className='post__tags--tags'>{tag} </pre>
              )})
            }
          </footer>
        </section>
    </section>

  )
}

export default Post;