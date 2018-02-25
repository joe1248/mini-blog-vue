import DummyApiServiceHelper from './lib/DummyApiServiceHelper';
import ApiServiceHelper from './lib/ApiServiceHelper';
import AppConfig from './AppConfig'

class ApiService {
  apiServiceHelper: any;
  dummyApiServiceHelper: any;
  appConfig: any;

  constructor () {
    this.apiServiceHelper = ApiServiceHelper;
    this.dummyApiServiceHelper = DummyApiServiceHelper;
    this.appConfig = AppConfig;
  }

  getArticles (page: string, limit: string, callback: Function) {
    if (this.appConfig.devMode) {
      this.dummyApiServiceHelper.getArticles('/articles/', page, limit, callback);
      return;
    }
    this.apiServiceHelper.get(this.appConfig.baseUrl + '/articles/' + page + '/' + limit, callback);
  }

  getOneArticle (id: string, callback: Function) {
    if (this.appConfig.devMode) {
      this.dummyApiServiceHelper.getOneArticle(id, callback);
      return;
    }
    this.apiServiceHelper.get(this.appConfig.baseUrl + '/article/' + id, callback);
  }

  searchArticles( searchedWords: string, callback: Function) {
    if (this.appConfig.devMode) {
      this.dummyApiServiceHelper.searchArticles(searchedWords, callback);
      return;
    }
    this.apiServiceHelper.get(this.appConfig.baseUrl + '/search/' + searchedWords, callback);
  }
}

export default new ApiService;
