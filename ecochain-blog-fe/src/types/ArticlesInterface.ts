import {ArticleInterface} from './ArticleInterface'

export interface ArticlesInterface {
  articles : Array<ArticleInterface>
  prev: string
  next: string
  numberOfPages: number
}
