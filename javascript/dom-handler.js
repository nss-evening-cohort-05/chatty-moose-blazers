var inputNewMessage = document.getElementById("messageInput");
var clearBoardBtn = document.getElementById("clearBoardBtn");
var messageDiv = document.getElementById("user-message");
var messageArray = Chatty.getArray();

messageDiv.innerHTML = messageArray;

//grabs object message from private array by ID and adds delete button/HTML
function makeDom(){
	for (var i = 0; i < messageArray.length; i++) {
		var messageString = "";
		messageString += messageArray[i];
		messageString += `<button id="deleteButton" type="button" class="btn btn-default">Delete</button>`;
		messageDiv.innerHTML += messageString;
	};
};

// clearBoardBtn.addEventListener("click", clearBoard() {
// 	Chatty.clearMessage(message);
// 	};
// );

//listens for the enter key to add new message in DOM
inputNewMessage.addEventListener("keyup", makeDom);

// var deleteMessage = document.getElementById("deleteButton");
// deleteMessage.addEventListener("click", myChatty.remove);

////////// code from instructions for adding attributes and dynamic event listeners
// This will disable the first button with a class of "button-message"
//document.getElementsByClassName("clear-messages")[0].setAttribute("disabled", true);

document.querySelector("body").addEventListener("click", function(event) {
  console.log(event);

  // Handle the click event on any li
  if (event.target.tagName.toLowerCase() === "li") {
    console.log("You clicked on an <li> element");
  }

  // Handle the click event on any DOM element with a certain class
  if (event.target.className === "article-section") {
    console.log("You clicked on an `article-section` element");
  }

  // Inspect the `id` property of the event target
  if (event.target.id === "page-title") {
    console.log("You clicked on the page-title element");
  }
});


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