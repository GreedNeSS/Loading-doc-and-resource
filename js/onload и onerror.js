function loaded() {
	alert('Изображения загруженны')
}

function preloadImages(sources, callback) {
	let i = 0;
	for (const src of sources) {
		let img = document.createElement('img');
		img.src = src;
		img.onload = img.onerror = function () {
			console.log(i);
			document.body.append(img);
			i++;
			if (i == sources.length) {
				loaded();
				callback();
			}
		}
	}
}

let sources = [
	"https://en.js.cx/images-load/1.jpg",
	"https://en.js.cx/images-load/2.jpg",
	"https://en.js.cx/images-load/3.jpg"
];

for (let i = 0; i < sources.length; i++) {
	sources[i] += '?' + Math.random();
}

function testLoaded() {
	let widthSum = 0;
	for (let i = 0; i < sources.length; i++) {
		let img = document.createElement('img');
		img.src = sources[i];
		widthSum += img.width;
	}
	alert(widthSum);
}

preloadImages(sources, testLoaded);