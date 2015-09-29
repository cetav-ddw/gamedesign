window.onload = function(){
    var options =
    {
        srcNode: 'img',             // grid items (class, node)
        margin: '5px',             // margin in pixel, default: 0px
        width: '100px',             // grid item width in pixel, default: 220px
        max_width: '500px',              // dynamic gird item width if specified, (pixel)
        resizable: true,            // re-layout if window resize
        transition: 'all 0.5s ease' // support transition for CSS3, default: all 0.5s ease
    }
    document.querySelector( '.grid' ).gridify( options );

    ( function() {
        var player = getElementById( 'player' );
        var playerOrigin = '*';
        var status = $( '.status' );

        // Listen for messages from the player
        if ( window.addEventListener ) {
            window.addEventListener( 'message', onMessageReceived, false );
        }
        else {
            window.attachEvent( 'onmessage', onMessageReceived, false );
        }

        // Handle messages received from the player
        function onMessageReceived( event ) {
            // Handle messages from the vimeo player only
            if ( !( /^https?:\/\/player.vimeo.com/ ).test( event.origin ) ) {
                return false;
            }
            
            if ( playerOrigin === '*' ) {
                playerOrigin = event.origin;
            }
            
            var data = JSON.parse( event.data );
            
            switch ( data.event ) {
                case 'ready':
                    onReady();
                    break;
                   
                case 'playProgress':
                    onPlayProgress( data.data );
                    break;
                    
                case 'pause':
                    onPause();
                    break;
                   
                case 'finish':
                    onFinish();
                    break;
            }
        }

        // Call the API when a button is pressed
        $( 'button' ).on( 'click', function() {
            post( $( this ).text().toLowerCase() );
        });

        // Helper function for sending a message to the player
        function post( action, value ) {
            var data = {
              method: action
            };
            
            if ( value ) {
                data.value = value;
            }
            
            var message = JSON.stringify( data );
            player[ 0 ].contentWindow.postMessage( data, playerOrigin );
        }

        function onReady() {
            status.text( 'ready' );
            
            post( 'addEventListener', 'pause' );
            post( 'addEventListener', 'finish' );
            post( 'addEventListener', 'playProgress' );
        }

        function onPause() {
            status.text( 'paused' );
        }

        function onFinish() {
            status.text( 'finished' );
        }

        function onPlayProgress( data ) {
            status.text( data.seconds + 's played' );
        }
    });
}