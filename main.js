// 2. This code loads the IFrame Player API code asynchronously.
const tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: '8EiT9ewKCvM',
    playerVars: {
      autoplay: 0,
      playsinline: 0,
      control: 1,
      fs: 0,
      modestbranding: 1,
    },
    events: {
      onReady(e) {
        player = e.target;
      },
    },
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

const done = false;

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}

function stopVideo() {
  player.stopVideo();
}

const ytOverlay = document.querySelector('.yt-overlay');

ytOverlay.addEventListener('click', (e) => {
  player.playVideo();
  document.querySelector('.yt-overlay').classList.add('is-closed');
  setTimeout(() => {
    document.querySelector('.yt-overlay').style.display = 'none';
  }, 2500);
});
