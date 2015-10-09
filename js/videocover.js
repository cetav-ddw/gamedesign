function videoCover() {
    // api vars
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
        videoLabel.style.display = 'none';
        playBtn.style.display = 'none';
    } );
};

videoCover();