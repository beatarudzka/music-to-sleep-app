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

  play.addEventListener('click', () => {
    playOrPauseMusic
  })
  playOrPauseMusic = () => {
    song.play()

  }
}

app()