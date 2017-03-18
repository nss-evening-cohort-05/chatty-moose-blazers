var darkTheme = document.getElementById("dark-theme");
var largeText = document.getElementById("large-text");


function executeThisCodeAfterFileLoaded(){
	var data = JSON.parse(this.responseText);
	console.log(data);

	for (var i = 0; i < data.default.length; i++) {
		Chatty.addItem(data.default[i].message);
		console.log(data.default[i].message);
	}

	// makeDom();
}

function executeThisCodeAfterFileFails() {
console.log("Load Failed.  Ready Player Two.")
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "../default.json");
myRequest.send();

darkTheme.addEventListener("change", function(event) {
	if (event.target.checked === true) {
		document.body.classList.add("dark");
	} else {
		console.log(event);
		document.body.classList.remove("dark");
	}
});

largeText.addEventListener("change", function(event) {
	if (event.target.checked === true) {
		document.body.classList.add("large");
		console.log(event);
	} else {
		document.body.classList.remove("large");
		console.log(document.body.className);
	}
});




