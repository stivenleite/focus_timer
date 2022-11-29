import {
  btnForest,
  iconForest,
  sliderForest,
  btnRain,
  iconRain,
  sliderRain,
  btnCafeteria,
  iconCafeteria,
  sliderCafeteria,
  btnFire,
  iconFire,
  sliderFire,
  forestSound,
  rainSound,
  cafeteriaSound,
  fireSound,
  btnClickSound
} from './elements.js'

export default function () {
  forestSound.loop = true
  rainSound.loop = true
  cafeteriaSound.loop = true
  fireSound.loop = true

  iconForest.addEventListener('click', function () {
    btnForest.classList.contains('selected')
      ? forestSound.pause()
      : forestSound.play()
    btnClick(btnForest)
  })

  sliderForest.addEventListener('input', () => {
    forestSound.volume = sliderForest.value / 100
  })

  iconRain.addEventListener('click', function () {
    btnRain.classList.contains('selected')
      ? rainSound.pause()
      : rainSound.play()
    btnClick(btnRain)
  })

  sliderRain.addEventListener('input', () => {
    rainSound.volume = sliderRain.value / 100
  })

  iconCafeteria.addEventListener('click', function () {
    btnCafeteria.classList.contains('selected')
      ? cafeteriaSound.pause()
      : cafeteriaSound.play()
    btnClick(btnCafeteria)
  })

  sliderCafeteria.addEventListener('input', () => {
    cafeteriaSound.volume = sliderCafeteria.value / 100
  })

  iconFire.addEventListener('click', function () {
    btnFire.classList.contains('selected')
      ? fireSound.pause()
      : fireSound.play()
    btnClick(btnFire)
  })

  sliderFire.addEventListener('input', () => {
    fireSound.volume = sliderFire.value / 100
  })

  function btnClick(btnName) {
    btnName.classList.toggle('selected')
    btnClickSound.play()
  }
}
