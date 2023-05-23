import { isParenthesizedTypeNode } from "typescript"

export const argList = [
  {value: "magical", label: "Magical"},
  {value: "mystery", label: "Mystery"},
  {value: "crime", label: "Crime"},
  {value: "fiction", label: "Fiction"},
  {value: "history", label: "History"}
]

export interface IArticle {
  title: string,
  body: string,
  tags: string[]
}

export type TArticle = {
  title: string,
  body: string,
  tags: string[]
}

export const fakeArticle: TArticle = {
  title: "Title",
  body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
  tags: ["tag1", "tag2", "tag2"]
}

export const fakeArticle2: TArticle = {
  title: "Title",
  body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
  tags: ["tag3"]
}