// Automatically wake the service worker when the page loads
chrome.runtime.sendMessage({wake: true}, function(response) {
	document.getElementById('status').textContent = response && response.status ? 'Service worker is awake!' : 'Service worker message sent.';
});
// Content script - runs in every page
console.log("content script loaded");
