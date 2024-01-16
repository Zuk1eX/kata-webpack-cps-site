const html = document.querySelector('html')
const page = document.querySelector('.page')
const overlayFunctions = page.querySelector('.overlay--functions')

const modals = overlayFunctions.querySelectorAll('.modal')
const modalsCloseBtns = []
modals.forEach((modal) =>
  modalsCloseBtns.push(modal.querySelector('.nav-button--type--close'))
)
const modalsOpenBtns = page.querySelectorAll(
  '[class*=nav-button--type]:not([class*=close])'
)
const modalsTypeModal = overlayFunctions.querySelectorAll('.modal--type--modal')

overlayFunctions.addEventListener('click', (e) => {
  if (e.target === overlayFunctions) {
    modals.forEach((modal) => modal.classList.remove('show'))
    overlayFunctions.classList.remove('show')

    if (!menu.classList.contains('show')) {
      html.classList.remove('no-scroll')
    }
  }
})

modals.forEach((modal) => {
  const closeBtn = modal.querySelector('.nav-button--type--close')
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show')

    if (
      Array.from(modals).filter((modal) => modal.classList.contains('show'))
        .length === 0
    ) {
      overlayFunctions.classList.remove('show')
      if (!menu.classList.contains('show')) {
        html.classList.remove('no-scroll')
      }
    }
  })
})

modalsOpenBtns.forEach((btn) => {
  let modalClass = btn.classList.value
    .split(' ')
    .filter((el) => el.includes('--type--'))[0]
  modalClass = modalClass.slice(modalClass.indexOf('--type--') + 8)

  btn.addEventListener('click', (event) => {
    const modal = overlayFunctions.querySelector(`.modal--action--${modalClass}`)
    modalsTypeModal.forEach((modal) => modal.classList.remove('show'))
    if (modal) {
      modal.classList.add('show')
      html.classList.add('no-scroll')
      overlayFunctions.classList.add('show')
    }
  })
})

const overlay = page.querySelector('.overlay')
const menu = overlay.querySelector('.menu')
const menuOpenBtn = page.querySelector('.nav-button--type--menu')
const menuCloseBtn = menu.querySelector('.nav-button--type--close')

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    menu.classList.remove('show')
    overlay.classList.remove('show')
    html.classList.remove('no-scroll')
  }
})

menuOpenBtn.addEventListener('click', () => {
  overlay.classList.add('show')
  menu.classList.add('show')
  html.classList.add('no-scroll')
})

menuCloseBtn.addEventListener('click', () => {
  menu.classList.remove('show')
  overlay.classList.remove('show')
  html.classList.remove('no-scroll')
})
