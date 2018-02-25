import {ArticlesInterface} from '../types/ArticlesInterface'
import {ArticleInterface} from '../types/ArticleInterface'
import DummyData from "./DummyData";

class DummyApiServiceHelper {
  constructor () {}

  getArticles (path: string, page: string, limit: string, callback: Function) {
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit)
    const articles: Array<ArticleInterface> = DummyData.getAllArticles()
    const pagedArticles: ArticlesInterface = {
      articles: articles.slice((pageNum -1) * limitNum, (pageNum -1) * limitNum + limitNum),
      prev: pageNum === 1 ? '' : path + (pageNum + 1) + '/' + limit,
      next: path + (pageNum + 1) + '/' + limit,
      numberOfPages: Math.ceil(articles.length / limitNum)
    }

    return callback(
      '',
      pagedArticles
    )
  }

  getOneArticle (id: string, callback: Function) {
    const articles: Array<ArticleInterface> = DummyData.getAllArticles()
    for (let i = 0; i < articles.length; i++) {
      if (articles[i].id === id) {
        return callback(
          '',
          articles[i]
        )
      }
    }
  }

  searchArticles (searchedWords: string, callback: Function) {
    return callback(
      '',
      DummyData.getAllArticles()
    )
  }
}

export default new DummyApiServiceHelper;
