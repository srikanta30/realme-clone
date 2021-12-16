//Importing index.js & db.js configuration:
const app = require("./index");
const connect = require("./configs/db");

const PORT = process.env.PORT || 5000;

//Connecting to the server:

app.listen(PORT, async () => {
    console.log("Starting The Server...");
    await connect();
    console.log("Listening To Port", PORT);
})