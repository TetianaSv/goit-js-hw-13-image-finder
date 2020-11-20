import getRefs from './js/refs'
import fetchAPI from './js/fetchAPI'
import { debounce } from 'lodash'


const refs = getRefs();
console.log(refs)

refs.searchForm.addEventListener('input', debounce(onSearch, 2000));


function onSearch(searchQuery) {
 let searchWorld = searchQuery.target.value;
  
fetchAPI(searchWorld)
}




// function fetchImages(searchWord, per_page, page) {
  
//   const PIXABAY_KEY = '19177852-b1d4f8b0af27ffd052e9c4f4a';
//   const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchWord}&page=${page}&per_page=${per_page}&key=${PIXABAY_KEY}';

//   return fetch(BASE_URL)
//     .then(response => response.json())
//     .then(renderCountryCard)
//     .catch(error => console.log(error))
//   // searchWord,
//   // per_page = 12,
//   // page = 1,
// // } {
// //   const request = await fetch(
// //     `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchWord}&page=${page}&per_page=${per_page}&key=${PIXABAY_KEY}`,
// //   );

// //   return await request.json();
// }
