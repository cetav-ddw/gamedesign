(function(d) {
    // Mozilla, Opera, Webkit
    if(d.addEventListener) {
      d.addEventListener('DOMContentLoaded', function() {
        d.removeEventListener('DOMContentLoaded', arguments.callee, false);
        domReady();
      }, false );

    // If IE event model is used
    } else if(d.attachEvent) {
      // ensure firing before onload
      d.attachEvent('onreadystatechange', function(){
        if ( d.readyState === 'complete' ) {
          d.detachEvent('onreadystatechange', arguments.callee );
          domReady();
        }
      });
    }

    function domReady() {
        var playBtn = d.getElementById('play-btn'),
            screenWidth = screen.width;

        if(d.querySelector('.grid')) {
            var options = {
                    srcNode: 'img',
                    margin: '5px',
                    width: '100px',
                    max_width: '500px',
                    resizable: true,
                    transition: 'all 0.5s ease'
                }
            d.querySelector('.grid').gridify(options);
        }

        if(playBtn) {
            d.getElementById('play-btn').addEventListener('click', function() {
                videoCover();
            });
        }

        if(screenWidth < 1024) {
            d.getElementById('games-item').onclick = function() {
                this.classList.toggle('expanded');
            }
        }
    }

    function videoCover() {
        var iframe = d.getElementById('video'),
            playBtn = d.getElementById('play-btn'),
            player = $f(iframe),
            coverImg = d.getElementById('video-cover'),
            videoLabel = d.getElementById('play-btn-label');

        loadVideo();

        player.api('play');
        coverImg.style.display = 'none';
        playBtn.style.display = 'none';
        videoLabel.style.display = 'none';
    }

    function loadVideo() {
        var videoIframe = d.getElementById('video'),
            videoSrc = videoIframe.getAttribute('data-src');

        if(videoIframe.hasAttribute('data-src')) {
            videoIframe.setAttribute('src', videoSrc);
            videoIframe.removeAttribute('data-src');
        }
    }
})(document);
