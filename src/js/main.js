const iconsActivate = document.getElementById('icons-activate');
const activ = document.getElementById('activ');
const width = innerWidth;

console.log("%c Challenge only for iphone and desktop X",  'background: #222; color: #bada55');

activ.addEventListener('click', () => {
	iconsActivate.classList.toggle('active');
	if (width < 480) {
		if (activ.classList.contains('show')){
			activ.classList.toggle('show')
		}

	}
});



