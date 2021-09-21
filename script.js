var d = new Date();
var time = d.toLocaleTimeString('it-IT', {
	hour: 'numeric',
	minute: 'numeric',
})

document.getElementById("time").innerHTML = time;

setInterval(function() { 
	var d = new Date();
	var time = d.toLocaleTimeString('it-IT', {
        	hour: 'numeric',
        	minute: 'numeric',
	})
	document.getElementById("time").innerHTML = time;
}, 3000);

