import getRefs from './refs'
import CardTmpl from '../templates/tmpl.hbs'

const refs = getRefs();
// console.log(refs)


export default function fetchAPI(searchWorld) {
    const page = 1;
    const per_page = 12;
    const PIXABAY_KEY = '19177852-b1d4f8b0af27ffd052e9c4f4a';
    // searchWorld = searchQuery.target.value;

    return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchWorld}&page=${page}&per_page=${per_page}&key=${PIXABAY_KEY}`)
        .then(response => response.json())
        .then(renderImageCard)
        .catch(error => console.log(error));

}

function renderImageCard(images) {
    console.log(images)
    const markup = CardTmpl(images)
    makeMarkup(markup);
}

function makeMarkup(html) {
  refs.galleryContainer.insertAdjacentHTML('beforeend', html);
}
