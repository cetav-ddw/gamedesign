var screenWidth = screen.width;
console.log(screenWidth);
if (screenWidth < 1024) {
	console.log(screenWidth);
	document.getElementById('games-item').onclick = function(){
		this.classList.toggle("expanded");
	}
}