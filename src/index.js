import getRefs from './js/refs'
import { debounce } from 'lodash'
import '../src/style.css'
import NewsApiService from './js/apiService'
import onSearch from './js/onSearch'
import {onLoadMore, onScrollTo} from './js/onSearch'
const refs = getRefs();

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('input', debounce(onSearch, 2000));
refs.loadMoreBtn.addEventListener('click', () => {
  onLoadMore();
  onScrollTo();
}
)

