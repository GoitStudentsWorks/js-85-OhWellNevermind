import Notiflix from 'notiflix';
import defoultImg from '../images/deafult-img.jpg';

const throttle = require( 'lodash.throttle' );

Notiflix.Loading.pulse({
  svgColor: 'var(--all-categories-active)',
});

const BASIC_URL = 'https://books-backend.p.goit.global/books/';

const categoriesListWrapper = document.querySelector('.js-categories-list');
const allCategoriesItem = document.querySelector('.js-all-categories');
const booksWrapperEl = document.querySelector('.js-books-wrapper');
const booksTitleEl = document.querySelector( '.js-books-title' );
const scrollUpBtn = document.querySelector( '.js-scroll-up' );

categoriesListWrapper.addEventListener('click', handleCategoryClick);
booksWrapperEl.addEventListener('click', topBooksSeeMore);
document.addEventListener('scroll', throttle(scroll, 300));

let currentCategory = allCategoriesItem;
const deafultInfo = 'Coming soon';

getAllCategories();
getTopBooks();

async function getAllCategories() {
  try {
    const response = await fetch(`${BASIC_URL}category-list`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const countries = await response.json();
    categoriesListWrapper.insertAdjacentHTML(
      'beforeend',
      createAllCategoriesListMarkup(countries)
    );
  } catch (err) {
    categoriesListWrapper.innerHTML = `<h2 class="home__books-all-category">Sorry, but there is no categories</h2>`;
    console.log(err);
  }
}

function handleCategoryClick(event) {
  if (event.target.nodeName != 'LI') {
    return;
  }
  const category = event.target.textContent.trim();
  addActiveClass(event.target);
  if (category === 'All categories') {
    getTopBooks();
  } else {
    getSelectedCategory(category);
  }
}

async function getTopBooks() {
  Notiflix.Loading.pulse({
    svgColor: 'var(--all-categories-active)',
  });
  try {
    booksWrapperEl.innerHTML = '';
    booksTitleEl.innerHTML = makeLastWordActive('Best sellers book');
    const response = await fetch(`${BASIC_URL}top-books `);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const topBooks = await response.json();
    booksWrapperEl.innerHTML = createAllBooksMarkup(topBooks);
    const topBooksBtn = document.querySelectorAll('.home__books-all-wrapper');
    Notiflix.Loading.remove();
  } catch (err) {
    Notiflix.Loading.remove();
    Notiflix.Notify.failure('Somesing was wrong! Please restart page!');
    console.log(err);
  }
}

function createAllCategoriesListMarkup(array) {
  return array
    .map(
      element => `<li class="home__categories-item">${element.list_name}</li>`
    )
    .join('');
}

function createAllBooksMarkup(array) {
  return array
    .map(
      category =>
      `<li class="home__books-all-wrapper">
      <p class="home__books-all-category">${category.list_name}</p>
      <ul class="home__books-all-items">
        ${createSelectCategoryMarkup(category.books)}
      </ul>
      <button class="home__books-all-btn" type="button">
        See more
      </button>
    </li>`
    )
    .join('');
}

function createSelectCategoryMarkup(array) {
  return array
    .map(
      ({ book_image, title, author }) =>
      `<li class="home__books-item">
      <img class="home__books-img" src="${book_image || defoultImg}" alt="${
          title || deafultInfo
        }" />
      <h3 class="home__books-title">${title || deafultInfo}</h3>
      <p class="home__books-author">${author || deafultInfo}</p>
    </li>`
    )
    .join('');
}

async function getSelectedCategory(category) {
  Notiflix.Loading.pulse({
    svgColor: 'var(--all-categories-active)',
  });

  booksTitleEl.innerHTML = makeLastWordActive(category);
  booksWrapperEl.innerHTML = '';
  try {
    const response = await fetch(`${BASIC_URL}category?category=${category}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const booksOfSelectegCategory = await response.json();
    booksWrapperEl.innerHTML = createSelectCategoryMarkup(
      booksOfSelectegCategory
    );
    Notiflix.Loading.remove();
  } catch (err) {
    Notiflix.Loading.remove();
    Notiflix.Notify.failure('Somesing was wrong! Please restart page!');
    console.log(err);
  }
}

function addActiveClass(target) {
  currentCategory.classList.remove('home__categories-item-active');
  target.classList.add('home__categories-item-active');
  currentCategory = target;
}

function topBooksSeeMore(event) {
  if (event.target.type != 'button') {
    return;
  }
  let categoryName = event.target.parentElement.querySelector(
    '.home__books-all-category'
  ).textContent;
  getSelectedCategory(categoryName);
  const categoriesArray = [...categoriesListWrapper.children];
  const target = categoriesArray.find(
    element => element.textContent === categoryName
  );
  addActiveClass(target);
}

function makeLastWordActive( string ) {
  if ( !string ) {
    return;
  }
  const words = string.split( ' ' );
  const activeWord = words[words.length - 1];
  return string.replace( activeWord, `<span class="js-active-word">${activeWord}</span>` );
}

function scroll() {
  if ( window.scrollY > 900 ) {
    scrollUpBtn.classList.remove('js-scroll-up-hidden')
    scrollUpBtn.addEventListener( 'click', () => {
       window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  } else {
    scrollUpBtn.classList.add('js-scroll-up-hidden')
  }
}


