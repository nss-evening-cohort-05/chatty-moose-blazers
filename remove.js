// IIFE should accept a message element id 
// and then remove the correct element from 
// the DOM. This IIFE should also remove the 
// corresponding message from the private array 
// that was created in the previous IIFE.

var Chatty = (function(message){

	message.clearAllMessages = function (){
		inputMessage.pop()
	};

});

