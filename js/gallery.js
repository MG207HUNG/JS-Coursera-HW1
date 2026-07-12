/*Name this external file gallery.js*/

function upDate(previewPic) {

	console.log("upDate triggered");
	console.log("alt:", previewPic.alt, "| src:", previewPic.src);
	document.getElementById("image").innerHTML = previewPic.alt;
	document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {

	console.log("unDo triggered");
	document.getElementById("image").style.backgroundImage = "url('')";
	document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}

function addTabIndex() {


	console.log("addTabIndex triggered - page has loaded");


	var images = document.getElementsByClassName("preview");


	for (var i = 0; i < images.length; i++) {
		images[i].setAttribute("tabindex", i + 1);
		console.log("tabindex set for image " + (i + 1) + ":", images[i].alt);
	}
}