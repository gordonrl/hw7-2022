var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	video = this.document.getElementById("player1");
	video.preload = "auto";
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
});//play button

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});//pause button

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.90;
	console.log(video.playbackRate);
});//slow down

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.10;
	console.log(video.playbackRate);
});//speed up

document.querySelector("#skip").addEventListener("click", function() {
	var vidLength = video.duration;

	if (video.currentTime + 10 > vidLength) video.currentTime = 0;
	else video.currentTime += 10;

	console.log(video.currentTime);
});//skip

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		this.innerHTML = "Mute";
	}//if video is muted\
	else {
		video.muted = true;
		this.innerHTML = "Unmute";
	}//else unmuted
});//mute/unmute

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
})//volume slider

document.querySelector("#vintage").addEventListener("click", function() {
	video.className += " oldSchool";
});//vintage style

document.querySelector("#orig").addEventListener("click", function() {
	video.className = "video";
});//original style



