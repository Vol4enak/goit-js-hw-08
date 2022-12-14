import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const cheackLocal = localStorage.getItem('videoplayer-current-time');
const player = new Player('vimeo-player', {
  id: 192,
  width: 640,
});

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(data.seconds)
    );
  }, 1000)
);
if (cheackLocal) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
