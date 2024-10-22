const output = document.getElementById("output");
const input = document.getElementById("input");

let files = [];

function handleInput(event) {
    if (event.key === "Enter") {
        const command = input.value.trim();
        processCommand(command);
        input.value = "";
    }
}

function processCommand(command) {
    const args = command.split(" ");
    switch (args[0]) {
        case "help":
            output.innerText += "Commands: help, exit, version, ls, create [version], delete [filename]\n";
            break;
        case "exit":
            output.innerText += "Exiting JihooOS Cloud...\n";
            break;
        case "version":
            output.innerText += "JihooOS Cloud version 1.0\n";
            break;
        case "ls":
            if (files.length === 0) {
                output.innerText += "No files found.\n";
            } else {
                output.innerText += files.join("\n") + "\n";
            }
            break;
        case "create":
            if (args[1]) {
                const version = args[1];
                files.push(`os-cloud-ver${version}.*`);
                output.innerText += `File os-cloud-ver${version}.* created.\n`;
            } else {
                output.innerText += "Usage: create [version]\n";
            }
            break;
        case "delete":
            if (args[1]) {
                files = files.filter(file => file !== args[1]);
                output.innerText += `File ${args[1]} deleted.\n`;
            } else {
                output.innerText += "Usage: delete [filename]\n";
            }
            break;
        default:
            output.innerText += "Unknown command. Type 'help' for a list of commands.\n";
            break;
    }
    scrollOutput();
}

function scrollOutput() {
    output.scrollTop = output.scrollHeight;
}

input.addEventListener("keypress", handleInput);
