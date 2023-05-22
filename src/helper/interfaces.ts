import { isParenthesizedTypeNode } from "typescript"

export interface IArticle {
  title: string,
  body: string,
  tags: string[]
}

export type Article = {
  title: string,
  body: string,
  tags: string[]
}

export const fakeArticle: Article = {
  title: "title",
  body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
  tags: ["tag1", "tag2", "tag2"]
}