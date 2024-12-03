// search
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', () => {
  searchInputEl.focus();
});
searchInputEl.addEventListener('focus', (e) => {
  searchEl.classList.add('focused');
  e.target.setAttribute('placeholder','통합검색');
});
searchInputEl.addEventListener('blur', (e) => {
  searchEl.classList.remove('focused');
  e.target.setAttribute('placeholder','');
});

// footer year
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear();