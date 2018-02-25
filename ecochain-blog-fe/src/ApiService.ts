import DummyApiServiceHelper from './lib/DummyApiServiceHelper';
import ApiServiceHelper from './lib/ApiServiceHelper';
import DummyData from './lib/DummyData'

class ApiService {
  devMode: boolean = false;
  baseUrl: string = 'http://localhost'; // 'http://api.blog.ecochain.com';
  apiServiceHelper: any;
  dummyApiServiceHelper: any;

  constructor () {
    this.apiServiceHelper = ApiServiceHelper;
    this.dummyApiServiceHelper = DummyApiServiceHelper;
  }

  getArticles (page: string, limit: string, callback: Function) {
    if (this.devMode) {
      this.dummyApiServiceHelper.getArticles('/articles/', page, limit, callback);
      return;
    }
    this.apiServiceHelper.get(this.baseUrl + '/articles/' + page + '/' + limit, callback);
  }

  getOneArticle (id: string, callback: Function) {
    if (this.devMode) {
      this.dummyApiServiceHelper.getOneArticle(id, callback);
      return;
    }
    this.apiServiceHelper.get(this.baseUrl + '/article/' + id, callback);
  }

  searchArticles( searchedWords: string, callback: Function) {
    if (this.devMode) {
      this.dummyApiServiceHelper.searchArticles(searchedWords, callback);
      return;
    }
    this.apiServiceHelper.get(this.baseUrl + '/search/' + searchedWords, callback);
  }
}

export default new ApiService;
