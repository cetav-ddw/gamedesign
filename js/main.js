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
}