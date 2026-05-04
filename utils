const fs = require('fs');

const saveToCapsule = (dataObject) => {
    try {
        // 1. Convert the JavaScript Object into a readable JSON string
        const jsonString = JSON.stringify(dataObject, null, 2);

        // 2. Write the file to the disk
        fs.writeFileSync('capsule.json', jsonString);

        console.log("✅ Success! Your message is locked in the capsule.json vault.");
    } catch (error) {
        // Error handling to prevent the app from crashing
        console.error("❌ Error writing to file:", error.message);
    }
};

// 3. Export the function so app.js can use it
module.exports = { saveToCapsule };
