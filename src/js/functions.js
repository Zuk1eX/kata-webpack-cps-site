function toggleContentMore(contentClassName, btnClassName) {
  const contentElement = document.querySelector(`.${contentClassName}`)
  const btnElement = document.querySelector(`.${btnClassName}`)

  return () => {
    const isShown = contentElement.classList.toggle(
      `${contentClassName}--shown`
    )
    btnElement.classList.toggle('more-button--shown')

    isShown
      ? (btnElement.textContent = 'Скрыть')
      : (btnElement.textContent = 'Читать далее')
  }
}

function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

function priceFormat(el) {
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
}

module.exports = { toggleContentMore, priceFormat }
