function showAbstract(val) {	
	
	var content = document.getElementById(val);
	
	if (content.style.display === "block") {
		content.style.display = "none";
	} else {				
		content.style.display = "block";				
	}
}