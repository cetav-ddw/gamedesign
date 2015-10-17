window.onload = function(){

    // Controles Galeria
    if(!document.querySelector( '.grid' )){
        return false;
    }else{

        var options = {
            srcNode: 'img',             // grid items (class, node)
            margin: '5px',             // margin in pixel, default: 0px
            width: '100px',             // grid item width in pixel, default: 220px
            max_width: '500px',              // dynamic gird item width if specified, (pixel)
            resizable: true,            // re-layout if window resize
            transition: 'all 0.5s ease' // support transition for CSS3, default: all 0.5s ease
        }
        document.querySelector( '.grid' ).gridify( options );
    }
}

// Dropdown
var screenWidth = screen.width;
if (screenWidth < 1024) {
    document.getElementById('games-item').onclick = function(){
        this.classList.toggle("expanded");
    }
}

// VideoCover
function videoCover() {
    // api vars
    if (!document.getElementById( 'video' )){
        return false;
    }else{
        var iframe = document.getElementById( 'video' );
        var player = $f( iframe );

        // content to hide on click
        var coverImg = document.getElementById( 'video-cover' );
        var videoLabel = document.getElementById( 'play-btn-label' );
        var playBtn = document.getElementById( 'play-btn' );

        // Call the API when a button is pressed
        playBtn.addEventListener( 'click', function(){
            player.api( 'play' );
            coverImg.style.display = 'none';
            playBtn.style.display = 'none';
        } );
    }
};

videoCover();
