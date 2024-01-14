import '../scss/style.scss'
import swiperCard from './mobile-slider'
import './mobile-menu'

swiperCard()
window.addEventListener('resize', swiperCard)

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
