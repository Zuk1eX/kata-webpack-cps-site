import '../scss/style.scss'
import './mobile-menu'
import SwiperController from './swiperController'
import { toggleContentMore, priceFormat } from './functions'

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
moreContentButton.addEventListener(
  'click',
  toggleContentMore('services__text', 'content__more-btn')
)

const prices = document.querySelectorAll('.price-card__price')
prices.forEach((element) => priceFormat(element))
