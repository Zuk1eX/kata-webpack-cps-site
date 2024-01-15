import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

class SwiperController {
  constructor(
    cardsListClassName,
    btnClassName,
    swiperClassName,
    paginationClassName
  ) {
    this.cardsListClassName = cardsListClassName
    this.cardsListElement = document.querySelector(`.${cardsListClassName}`)
    this.btnElement = document.querySelector(`.${btnClassName}`)
    this.swiperClassName = `.${swiperClassName}`
    this.paginationElement = document.querySelector(`.${paginationClassName}`)
    this.init = false
    this.swiper = null
    this.swiperSettings = {
      modules: [Pagination],
      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: 16,
      grabCursor: true,
      pagination: {
        el: `.${paginationClassName}`,
        clickable: true
      }
    }

    this.createBtnClickListener()
    this.handleResize()
    this.update()
  }

  btnEventHandler() {
    const cardsListShownClassName = `${this.cardsListClassName}--shown`

    if (this.cardsListElement.classList.contains(cardsListShownClassName)) {
      this.cardsListElement.classList.remove(cardsListShownClassName)
      this.toggleMoreBtn(false)
      return
    }

    this.cardsListElement.classList.add(cardsListShownClassName)
    this.toggleMoreBtn(true)
  }

  toggleMoreBtn(onState) {
    if (onState) {
      this.btnElement.classList.add('more-button--shown')
      this.btnElement.textContent = 'Скрыть'
      return
    }

    this.btnElement.classList.remove('more-button--shown')
    this.btnElement.textContent = 'Показать все'
  }

  toggleCardsSlider(onState) {
    if (onState) {
      this.cardsListElement.classList.remove(this.cardsListClassName)
      this.cardsListElement.classList.remove(
        `${this.cardsListClassName}--shown`
      )
      this.paginationElement.classList.remove('hidden')
      this.btnElement.classList.add('hidden')
      this.toggleMoreBtn(false)
      return
    }

    this.cardsListElement.classList.add(this.cardsListClassName)
    this.paginationElement.classList.add('hidden')
    this.btnElement.classList.remove('hidden')
  }

  createBtnClickListener() {
    this.btnElement.addEventListener('click', () => this.btnEventHandler())
  }

  initSwiper() {
    this.swiper = new Swiper(this.swiperClassName, this.swiperSettings)
    this.toggleCardsSlider(true)
  }

  destroySwiper() {
    this.swiper.destroy()
    this.init = false
    this.toggleCardsSlider(false)
  }

  update() {
    const mobile = window.matchMedia('(max-width: 767px)')

    if (mobile.matches && !this.init) {
      this.init = true
      this.initSwiper()
    } else if (!mobile.matches && this.init) {
      this.destroySwiper()
    }
  }

  handleResize() {
    window.addEventListener('resize', () => {
      this.update()
    })
  }
}

export default SwiperController
