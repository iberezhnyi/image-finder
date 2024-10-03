const axios = require('axios').default;

const API_KEY = '31085485-d3b506dd28137d49a12c009f9';
const BASE_URL = 'https://pixabay.com/api/';

export default class SearchServiceApi {
  constructor(perPage = 40, q = '') {
    this.searchQuery = q;
    this.page = 1;
    this.per_page = perPage;
  }

  async fetchImages() {
    const options = {
      params: {
        key: API_KEY,
        q: `${this.searchQuery}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: `${this.per_page}`,
        page: `${this.page}`,
      },
    };

    const response = await axios.get(BASE_URL, options);
    this.page += 1;

    return response.data;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
