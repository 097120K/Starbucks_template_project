// youtube iframe
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 재생할 youtube 영상 id
    playerVars : {
      autoplay : true,
      loop : true,
      playlist : 'An6LvWQuj_8' // 반복재생할 youtube 영상 id
    },
    events: {
      onReady : function(event){
        event.target.mute() // youtube 영상 음소거
      } 
    }
  });
}