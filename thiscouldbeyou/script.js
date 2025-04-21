// Function to get the query parameter
function getQueryParameter(name) {
	let urlParams = new URLSearchParams(window.location.search);
	return urlParams.get(name);
}

// On window load, check the query string and update content
window.onload = function() {
	let nameParam = getQueryParameter('name');
	
	if (nameParam == "Russelbuck") {
		// Update image URL
		let imgElement = document.querySelector(".grid-item:nth-child(2) img");
		imgElement.src = "https://f4.bcbits.com/img/a2820360667_16.jpg"; // Update with your custom image URL
		
		// Update title and subtitle
		let titleWelcome = document.querySelector(".grid-item:nth-child(1) h2");
		let subtitleWelcome = document.querySelector(".grid-item:nth-child(1) p");
		
		titleWelcome.textContent = "Welcome, " + nameParam;  // Update title with the name
		subtitleWelcome.textContent = "This is your custom story";  // Update subtitle
		
		// Update title and subtitle
		let titleElement = document.querySelector(".grid-item:nth-child(2) h2");
		let subtitleElement = document.querySelector(".grid-item:nth-child(2) p");
		
		titleElement.textContent = "RAVEPOP";  // Update title with the name
		subtitleElement.textContent = "Russelbuck";  // Update subtitle
	}
};