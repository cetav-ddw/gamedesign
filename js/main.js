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
    var playBtn = document.getElementById('play-btn');
    var screenWidth = screen.width;

    if(document.querySelector('.grid')) {
        var options = {
            srcNode: 'img',             // grid items (class, node)
            margin: '5px',              // margin in pixel, default: 0px
            width: '100px',             // grid item width in pixel, default: 220px
            max_width: '500px',         // dynamic gird item width if specified, (pixel)
            resizable: true,            // re-layout if window resize
            transition: 'all 0.5s ease' // support transition for CSS3, default: all 0.5s ease
        }
        document.querySelector('.grid').gridify(options);
    }

    // VideoCover
    function videoCover() {
        var iframe = document.getElementById('video');
        var player = $f(iframe);

        // content to hide on click
        var coverImg = document.getElementById('video-cover');
        var videoLabel = document.getElementById('play-btn-label'); // Que hacen con esto?

        player.api('play');
        coverImg.style.display = 'none';
        playBtn.style.display = 'none';
    };

    if(playBtn) {
        document.getElementById('play-btn').addEventListener('click', function() {
            videoCover();
        });
    }

    // Dropdown
    if (screenWidth < 1024) {
        document.getElementById('games-item').onclick = function() {
            this.classList.toggle('expanded');
        }
    }
}
