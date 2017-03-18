var Chatty = (function (myChatty) { 
  // privates
  var id = 0
  var MessageArray = []; 
 
 
    // Add items to  MessageArray
    myChatty.addItem = function( values ) {
      MessageArray.push(values);
    };
 
    // set the count of items in Array
    myChatty.setItemCount = function (length) {
      MessageArray.length = length;
    };

 
    // Return an object exposed to the public
    myChatty.getArray = function () {
        return MessageArray;
    };

    // Delete 1 element at posion index id
    myChatty.deleteItem = function(id) {
        MessageArray.splice(id, 1);         
    }

   
  return myChatty;

})(Chatty|| {});
