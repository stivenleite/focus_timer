const btnForest = document.querySelector('#btnForest')
const iconForest = document.querySelector('#iconForest')
const sliderForest = document.querySelector('#sliderForest')
const btnRain = document.querySelector('#btnRain')
const iconRain = document.querySelector('#iconRain')
const sliderRain = document.querySelector('#sliderRain')
const btnCafeteria = document.querySelector('#btnCafeteria')
const iconCafeteria = document.querySelector('#iconCafeteria')
const sliderCafeteria = document.querySelector('#sliderCafeteria')
const btnFire = document.querySelector('#btnFire')
const iconFire = document.querySelector('#iconFire')
const sliderFire = document.querySelector('#sliderFire')

let minutesDisplay = document.querySelector('#minutes')
let secondsDisplay = document.querySelector('#seconds')
const btnPlay = document.querySelector('#btnPlay')
const btnStop = document.querySelector('#btnStop')
const btnIncrease = document.querySelector('#btnIncrease')
const btnDecrease = document.querySelector('#btnDecrease')

const forestSound = new Audio('./assets/Floresta.wav')
const rainSound = new Audio('./assets/Chuva.wav')
const cafeteriaSound = new Audio('./assets/Cafeteria.wav')
const fireSound = new Audio('./assets/Lareira.wav')
const btnClickSound = new Audio(
  'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
)
const timerSound = new Audio(
  'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
)

const darkModeOn = document.querySelector('#darkModeOn')
const darkModeOff = document.querySelector('#darkModeOff')
const root = document.querySelector('html')

btnClickSound.volume = 0.4
timerSound.volume = 0.4

export {
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
  minutesDisplay,
  secondsDisplay,
  btnPlay,
  btnStop,
  btnIncrease,
  btnDecrease,
  forestSound,
  rainSound,
  cafeteriaSound,
  fireSound,
  btnClickSound,
  timerSound,
  darkModeOn,
  darkModeOff,
  root
}
