
var messageDiv = document.getElementById("user-message");
var clearBoard = document.getElementById("buttonID");


//grabs object message from private array by ID and adds delete button/HTML
function makeDom(){
	var messageString = "";
	//object element ID + user message
	// + delete button
	messageDiv.innerHTML += messageString;
};






clearBoard.addEventListener("click", clearBoard(){

	Chatty.clearMessage(message);
	};
);


//listens for the enter key to add new message in DOM
input.addEventListener("keyup", makeDom);
