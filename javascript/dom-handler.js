
var inputNewMessage = document.getElementById("messageInput");
var clearBoardBtn = document.getElementById("clearBoardBtn");
var messageDiv = document.getElementById("user-message");


//grabs object message from private array by ID and adds delete button/HTML
function makeDom(){
	var messageString = "";
	//object element ID + user message
	// + delete button
	messageDiv.innerHTML += messageString;
};



clearBoardBtn.addEventListener("click", clearBoard() {
	Chatty.clearMessage(message);
	};
);


//listens for the enter key to add new message in DOM
inputNewMessage.addEventListener("keyup", makeDom);
