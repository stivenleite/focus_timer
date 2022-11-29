import { darkModeOn, darkModeOff, root, btnClickSound } from './elements.js'

export default function () {
  darkModeOn.addEventListener('click', () => {
    darkModeOn.classList.add('hide')
    darkModeOff.classList.remove('hide')
    root.classList.add('darkMode')
    btnClickSound.play()
  })

  darkModeOff.addEventListener('click', () => {
    darkModeOff.classList.add('hide')
    darkModeOn.classList.remove('hide')
    root.classList.remove('darkMode')
    btnClickSound.play()
  })
}
