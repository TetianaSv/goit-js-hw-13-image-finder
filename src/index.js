import getRefs from './js/refs'


const refs = getRefs();
console.log(refs)

refs.searchForm.addEventListener('submit', onSearch);


function onSearch(e) {
  e.preventDefault();
  
}