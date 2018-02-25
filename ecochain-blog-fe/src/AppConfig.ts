class AppConfig {
  devMode: boolean = false;
  baseUrl: string = 'http://localhost'; // 'http://api.blog.ecochain.com';

  numberOfArticlesPerPage: number = 2;
}

export default new AppConfig;
