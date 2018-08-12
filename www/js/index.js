var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
  
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
   
    onDeviceReady: function() { 
        document.getElementbyId("join").onclick = function() {
        //actual code here    
        }
    },
};
