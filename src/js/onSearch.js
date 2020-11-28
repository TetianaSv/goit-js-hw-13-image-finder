import NewsApiService from './apiService'
import getRefs from './refs'
import renderImageCard from './renderImageCard'

const refs = getRefs();
const newsApiService = new NewsApiService();


export default function onSearch(e) {
  newsApiService.query = e.target.value;
  clearGalleryContainer();
  newsApiService.resetPage();
  newsApiService.fetchAPI().then(renderImageCard)
  
  if (newsApiService.searchWord = '') {
    clearGalleryContainer();
  }
  }

  function clearGalleryContainer() {
    refs.galleryContainer.innerHTML = '';
  }

  export function onLoadMore () {
    newsApiService.fetchAPI().then(renderImageCard)
  }
  export function onScrollTo() {
    let value = document.body.scrollHeight;
     setTimeout(() => {
      window.scrollTo({
        top: value,
        left: 0,
        behavior: 'smooth',
      });
    }, 200);
  }
  