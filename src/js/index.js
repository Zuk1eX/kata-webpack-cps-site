import '../scss/style.scss'
import './mobile-menu'
import SwiperController from './swiperController'

const brandsSwiper = new SwiperController(
  'brands-cards__list',
  'brands__more-btn',
  'brands-swiper',
  'brands-cards__pagination'
)
const typesSwiper = new SwiperController(
  'types-cards__list',
  'types__more-btn',
  'types-swiper',
  'types-cards__pagination'
)

const moreContentButton = document.querySelector('.content__more-btn')
const test = document.querySelector('.services__text')

function toggleContentMore(contentEl, btnEl, toggleClassEl, toggleClassBtn) {
  contentEl.classList.toggle(toggleClassEl)
  document.querySelector('.services__content').classList.toggle(toggleClassEl)
  btnEl.classList.toggle(toggleClassBtn)

  if (contentEl.classList.contains(toggleClassEl)) {
    btnEl.textContent = 'Скрыть'
  } else {
    btnEl.textContent = 'Читать далее'
  }
}

moreContentButton.addEventListener('click', () =>
  toggleContentMore(
    test,
    moreContentButton,
    'services__text--shown',
    'more-button--shown'
  )
)
