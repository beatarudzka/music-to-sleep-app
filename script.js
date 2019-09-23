const app = () => {
  const play = document.querySelector('.container__player--player')
  const song = document.querySelector('.music')
  const circleButton = document.querySelector('.moving-outline circle')
  const movieBackground = document.querySelector('.container__video video')
  const music = document.querySelectorAll('.container__sound-picker button')
  const timeDisplay = document.querySelector('.time-display')
  const outlineLengthOfPlay = circleButton.getTotalLength()

  let songDuration = 600
  circleButton.style.strokeDasharray = outlineLengthOfPlay
  // circleButton.style.strokeDashoffset = outlineLengthOfPlay

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


  song.ontimeupdate = () => {
    let currentTime = song.currentTime
    let elapsedTime = songDuration - currentTime
    let timeInSeconds = Math.floor(elapsedTime % 60)
    let timeInMinutes = Math.floor(elapsedTime / 60)

    let progressOfMusic = outlineLengthOfPlay - (currentTime / songDuration) * outlineLengthOfPlay
    circleButton.style.strokeDashoffset = progressOfMusic
    console.log(progressOfMusic)
  }
}

app()