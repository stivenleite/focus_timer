import {
  minutesDisplay,
  secondsDisplay,
  btnPlay,
  btnStop,
  btnIncrease,
  btnDecrease,
  btnClickSound,
  timerSound
} from './elements.js'

export default function () {
  let countdownId
  let defaultMinutes = minutesDisplay.textContent
  const defaultSeconds = secondsDisplay.textContent

  function countdown() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if ((seconds == 0) & (minutes == 0)) {
      timerSound.play()
      return
    }

    countdownId = setTimeout(() => {
      if (seconds == 0) {
        minutes--
        seconds = 60
      }

      seconds--

      updateTimerDisplay(minutes, seconds)

      countdown()
    }, 1000)
  }

  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function increaseMinutes() {
    let newMinutes = String(Number(minutesDisplay.textContent) + 5).padStart(
      2,
      '0'
    )
    updateTimerDisplay(newMinutes, 0)
    defaultMinutes = minutesDisplay.textContent
    clearTimeout(countdownId)
  }

  function decreaseMinutes() {
    let newMinutes = String(Number(minutesDisplay.textContent) - 5).padStart(
      2,
      '0'
    )
    if (newMinutes <= 0) {
      return
    }
    updateTimerDisplay(newMinutes, 0)
    defaultMinutes = minutesDisplay.textContent
    clearTimeout(countdownId)
  }

  btnPlay.addEventListener('click', () => {
    btnPlay.classList.add('selected')
    btnStop.classList.remove('selected')
    countdown()
    btnClickSound.play()
  })

  btnStop.addEventListener('click', () => {
    btnStop.classList.add('selected')
    btnPlay.classList.remove('selected')
    clearTimeout(countdownId)
    btnClickSound.play()
  })

  btnStop.addEventListener('dblclick', () => {
    btnPlay.classList.remove('selected')
    btnStop.classList.remove('selected')
    updateTimerDisplay(defaultMinutes, defaultSeconds)
  })

  btnIncrease.addEventListener('click', () => {
    increaseMinutes()
    btnClickSound.play()
  })

  btnDecrease.addEventListener('click', () => {
    decreaseMinutes()
    btnClickSound.play()
  })
}
