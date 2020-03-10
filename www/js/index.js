
var app = {
    
    initialize: function() {
        this.bindEvents();
    },
    
    bindEvents: function() {
        
		
    },
    
    onDeviceReady: function() {
        window.addEventListener("batterystatus", onBatteryStatus, false);
		
    },
    
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function onBatteryStatus(info) { 
   alert("BATTERY STATUS:  Level: " + info.level + " isPlugged: " + info.isPlugged); 
}
