const app = () => {
  const play = document.querySelector('.container__player--player')
  const song = document.querySelector('.music')
  const circleButton = document.querySelector('.moving-outline circle')
  const movieBackground = document.querySelector('.container__video video')
  const music = document.querySelectorAll('.container__sound-picker button')
  const timeDisplay = document.querySelector('.time-display')
  // const outlineLengthOfPlay = circleButton.getTotalLengthOfPlay()

  let songDuration = 600
  circleButton.style.strokeDasharray = 100

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
}

app()