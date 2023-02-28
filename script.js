const chatHistory = document.getElementById("chat-history");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// This function sends a message to the GPT-2 API and returns the response
async function sendMessage(message) {
	const response = await fetch("https://api.openai.com/v1/engines/davinci-codex/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization": "Bearer YOUR_API_KEY_HERE"
		},
		body: JSON.stringify({
			prompt
