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
			prompt: message,
			max_tokens: 50,
			n: 1,
			stop: "\n",
		}),
	});
	const data = await response.json();
	return data.choices[0].text.trim();
}

// This function creates a chat bubble with the given message and adds it to the chat history
function addChatBubble(message, isUser) {
	const bubble = document.createElement("div");
	bubble.className = isUser ? "user-bubble" : "bot-bubble";
	bubble.innerText = message;
	chatHistory.appendChild(bubble);
	chatHistory.scrollTop = chatHistory.scrollHeight;
}

// This function handles user input and sends a message to the GPT-2 API
async function handleInput() {
	const message = userInput.value.trim();
	if (message.length > 0) {
		addChatBubble(message, true);
		userInput.value = "";
		const
