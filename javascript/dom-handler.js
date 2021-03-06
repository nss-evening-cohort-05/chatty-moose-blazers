var inputNewMessage = document.getElementById("messageInput");
var messageDiv = document.getElementById("user-message");
var clearBoard = document.getElementById("clearBoard");

//grabs object message from private array by ID and adds delete button/HTML
function makeDom(){
	var messageArray = Chatty.getArray();
	if (messageArray.length === 0) {
		console.log("length is 0");
		clearBoard.classList.add("disabled");
	}
	else if (messageArray.length > 0) {
		clearBoard.classList.remove("disabled");
	}
	console.log("messageArray", messageArray);
	messageDiv.innerHTML = "";
	for (var i = 0; i < messageArray.length; i++) {
		var messageString = `<li>`;
		messageString += messageArray[i];
		messageString += `<button type="button" class="speak">🔊</button>`;  // add speaker button
		messageString += `<button id="deleteButton-${[i]}" type="button" class="btn btn-default">Delete</button><br>`;
		messageDiv.innerHTML += messageString + `</li>`;
	};
};

// clearBoardBtn.addEventListener("click", clearBoard() {
// 	Chatty.clearMessage(message);
// 	};
// );

 function enterKeyPressed (keyPress) {
      if (keyPress.keyCode == 13) {
      Chatty.addItem(inputNewMessage.value);
      inputNewMessage.value = "";
      makeDom();
    }
  };




//listens for the enter key to add new message in DOM
inputNewMessage.addEventListener("keyup", enterKeyPressed);

function deleteThisMessage (event){
	if(event.target.className === 'btn btn-default'){
		var id = event.target.id;
		if (id == 'clearBoard'){
			Chatty.removeAll();
			makeDom();
			}
		else {	
			var buttonNumber = id.split('deleteButton-')[1];
			console.log("is this working?", buttonNumber);
			Chatty.deleteItem(buttonNumber);
			makeDom();
		}
	};
	// speak text event
	if (event.target.className == "speak"){

		var msg = new SpeechSynthesisUtterance(event.target.previousSibling.textContent);
		window.speechSynthesis.speak(msg);

	};
};

document.body.addEventListener("click", deleteThisMessage);


//dark theme check box
var darkTheme = document.getElementById("dark-theme");
darkTheme.addEventListener("change", function(event) {
	if (event.target.checked === true) {
		document.body.classList.add("dark");
	} else {
		console.log(event);
		document.body.classList.remove("dark");
	}
});

//large text check box
var largeText = document.getElementById("large-text");
largeText.addEventListener("change", function(event) {
	if (event.target.checked === true) {
		document.body.classList.add("large");
		console.log(event);
	} else {
		document.body.classList.remove("large");
		console.log(document.body.className);
	}
});