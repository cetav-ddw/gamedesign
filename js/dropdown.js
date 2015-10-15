window.onload = function(){
	var screenWidth = screen.width;
	if (screenWidth < 1024) {
		console.log(screenWidth);
		document.getElementById('games-item').onclick = function(){
			this.classList.toggle("expanded");
		}
	};
}