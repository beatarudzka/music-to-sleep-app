const app = () => {
  const play = document.querySelector('.container__player--player')
  const song = document.querySelector('.song')
  const circleButton = document.querySelector('.moving-outline circle')
  let movieBackground = document.querySelector('.container__video video')
  const musicButtons = document.querySelectorAll('.container__sound-picker button')
  const timeSelect = document.querySelectorAll('.container__time-select button')
  const timeDisplay = document.querySelector('.time-display')
  const outlineLengthOfPlay = circleButton.getTotalLength()

  circleButton.style.strokeDasharray = outlineLengthOfPlay
  circleButton.style.strokeDashoffset = outlineLengthOfPlay
  let songDuration = 600

  const playOrPauseMusic = (song) => {
    if (song.paused) {
      song.play()
      play.src = './svg/pause.svg'
      movieBackground.play()
    } else {
      song.pause()
      play.src = './svg/play.svg'
      movieBackground.pause()
    }
  }

  play.addEventListener('click',
    () => { playOrPauseMusic(song) }
  )

  musicButtons.forEach(musicButton => {
    musicButton.addEventListener('click', function () {
      song.src = this.getAttribute('data-sound')
      playOrPauseMusic(song)
    })
  })
  timeSelect.forEach(button => {
    button.addEventListener('click', function () {
      songDuration = this.getAttribute('data-time')
      timeSelect.textContent = `${Math.floor(songDuration / 60)}:${Math.floor(songDuration % 60)}`
    })
  })


  song.ontimeupdate = () => {
    let currentTime = song.currentTime
    let elapsedTime = songDuration - currentTime
    let timeInSeconds = Math.floor(elapsedTime % 60)
    let timeInMinutes = Math.floor(elapsedTime / 60)

    let progressOfMusic = outlineLengthOfPlay - (currentTime / songDuration) * outlineLengthOfPlay
    circleButton.style.strokeDashoffset = progressOfMusic
    timeDisplay.textContent = `${timeInMinutes}:${timeInSeconds}`

    if (currentTime >= songDuration) {
      song.pause()
      song.currentTime = 0
      play.src = './svg/pause.svg'
      movieBackground.pause()
    }
  }
}

app()