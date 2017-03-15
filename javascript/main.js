var inText = document.getElementsByClassName("form-control");
console.log(inText[0].innerHTML);
var messageBox = document.getElementById("pointsContainer");


function exectueThisCodeAfterFileLoaded(){
	var data = JSON.parse(this.responseText);
	console.log(data);

	for (var i = 0; i < data.default.length; i++) {
		Chatty.addItem(data.default[i].message);
		console.log(data.default[i].message);
	}
}

function exectueThisCodeAfterFileFails() {
console.log("Load Failed.  Ready Player Two.")
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", exectueThisCodeAfterFileLoaded);
myRequest.addEventListener("error", exectueThisCodeAfterFileFails);
myRequest.open("GET", "../default.json");
myRequest.send();