this.mjcg = this.mjcg || {};

mjcg.IMAGE_BASE = "./img/";

document.addEventListener("DOMContentLoaded", function() {

	var game = new mjcg.Game(document.getElementById("container"));
	game.initGame();
}, false);
