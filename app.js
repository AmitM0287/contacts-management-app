const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.json({ hello: "hi"}));

app.listen(3000, () => {
	console.log(`Server is running on port ${3000}\n`);
});
