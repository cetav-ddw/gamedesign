(function(w, d, u) {
    // Mozilla, Opera, Webkit
    if(document.addEventListener) {
      document.addEventListener('DOMContentLoaded', function() {
        document.removeEventListener('DOMContentLoaded', arguments.callee, false);
        domReady();
      }, false );

    // If IE event model is used
    } else if(document.attachEvent) {
      // ensure firing before onload
      document.attachEvent('onreadystatechange', function(){
        if ( document.readyState === 'complete' ) {
          document.detachEvent('onreadystatechange', arguments.callee );
          domReady();
        }
      });
    }

    function domReady() {
        var playBtn = document.getElementById('play-btn'),
            screenWidth = screen.width;

        function videoCover() {
            var iframe = document.getElementById('video'),
                player = $f(iframe),
                coverImg = document.getElementById('video-cover'),
                videoLabel = document.getElementById('play-btn-label');

            player.api('play');
            coverImg.style.display = 'none';
            playBtn.style.display = 'none';
            videoLabel.style.display = 'none';
        };

        if(document.querySelector('.grid')) {
            var options = {
                    srcNode: 'img',
                    margin: '5px',
                    width: '100px',
                    max_width: '500px',
                    resizable: true,
                    transition: 'all 0.5s ease'
                }
            document.querySelector('.grid').gridify(options);
        }

        if(playBtn) {
            document.getElementById('play-btn').addEventListener('click', function() {
                videoCover();
            });
        }

        if(screenWidth < 1024) {
            document.getElementById('games-item').onclick = function() {
                this.classList.toggle('expanded');
            }
        }
    }
})(window, document);
