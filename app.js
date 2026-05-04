const os = require('os');
const { saveToCapsule } = require('./utils');

// 1. Capture the user's message from the terminal
// Running: node app.js "Hello" -> userMessage becomes "Hello"
const userMessage = process.argv[2]; 

if (!userMessage) {
    console.log("⚠️ Usage: node app.js 'Your secret message here'");
    process.exit(1);
}

// 2. Get system details using the 'os' module and Destructuring
const { username } = os.userInfo();
const platform = os.platform();

// 3. Create the data package
const capsuleData = {
    message: userMessage,
    author: username,
    system: platform,
    timestamp: new Date().toLocaleString()
};

console.log(`🚀 Preparing capsule for user: ${username}...`);

// 4. Send the package to the Librarian (utils.js) to be saved
saveToCapsule(capsuleData);
