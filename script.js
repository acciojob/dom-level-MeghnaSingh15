//your JS code here. If required.
let n = document.getElementById("level");
let level = 0;
while(n.parentNode){
	level++;
	n = n.parentNode;	
}
alert("The level of the element is" + " " + level);