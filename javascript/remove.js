// IIFE should accept a message element id 
// and then remove the correct element from 
// the DOM. This IIFE should also remove the 
// corresponding message from the private array 
// that was created in the previous IIFE.

var Chatty = (function(myChatty){

	// var clearBoard = document.getElementById("clearBoard");

	myChatty.removeAll= function (){
		Chatty.setItemCount(0);
		// if(event.target.clearBoard){
		// 	event.target.parentElement.remove();
		// }

	}
	return myChatty;	

})(Chatty || {});


	// var deleteButton = document.getElementById("deleteButton");

	// myChatty.removeItem = function (removeOneMsg){
	// 	if(event.target.deleteButton){
	// 		event.target.parentElement.remove();	
	// 		// event.target.parentElement.splice(); this instead?	
	// 	}	
	// }



