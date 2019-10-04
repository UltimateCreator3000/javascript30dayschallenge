function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if (!audio) return; stop the funcion from running all together
	audio.currentTime = 0; // rewind to the start
	audio.play();
	key.classList.add("playing");
	console.log(audio);
	console.log(key);
}

function removeTransition(e) {
	// skip it if it's not a transform
	if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

