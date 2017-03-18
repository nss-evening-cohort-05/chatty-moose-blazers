// IIFE should accept a message element id 
// and then remove the correct element from 
// the DOM. This IIFE should also remove the 
// corresponding message from the private array 
// that was created in the previous IIFE.

var Chatty = (function(myChatty){

	var deleteButton = document.getElementById("deleteButton");
	var clearBoard = document.getElementById("clearBoard");

	myChatty.removeItem = function (removeOneMsg){
		if(event.target.deleteButton){
			event.target.parentElement.remove();	
		}	
	}

	myChatty.removeAll= function (removeBoard){
		if(event.target.clearBoard){
			event.target.parentElement.remove();
		}
	}
	return myChatty;	

})(Chatty || {});



