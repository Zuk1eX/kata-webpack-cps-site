import '../scss/style.scss'
import './mobile-menu'
import SwiperController from './swiperController'

const brandsSwiper = new SwiperController(
  'brands-cards__list',
  'brands__more-btn',
  'brands-swiper',
  'brands-cards__pagination'
)
brandsSwiper.createBtnClickListener()

const typesSwiper = new SwiperController(
  'types-cards__list',
  'types__more-btn',
  'types-swiper',
  'types-cards__pagination'
)
typesSwiper.createBtnClickListener()

const pricesSwiper = new SwiperController(
  'prices-cards__list',
  undefined,
  'prices-swiper',
  'prices-cards__pagination'
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

function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

const prices = document.querySelectorAll('.price-card__price')
prices.forEach((el) => {
  const elText = el.textContent
  if (elText == 0) {
    el.textContent = 'Бесплатно'
    const elParentText = el.parentElement.textContent
    el.parentElement.textContent = elParentText
      .slice(0, elParentText.length - 2)
      .trimLeft()
    return
  }
  el.textContent = numberWithSpaces(el.textContent)
})
