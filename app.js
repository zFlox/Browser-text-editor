document.getElementById("heading").innerHTML = localStorage["title"] || "Just Write";
document.getElementById("content").innerHTML = localStorage["text"] || "This text is automatically saved every second";

setInterval(function(){ //function that is saving the text of the div.
    localStorage["title"] = document.getElementById("heading").innerHTML; //heading div
    localStorage["text"] = document.getElementById("content").innerHTML; // content div
}, 1000);

