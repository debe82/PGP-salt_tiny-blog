
export const argList = [
  "magical", "mystery","crime", "fiction", "history", 
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
