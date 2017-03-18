
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





