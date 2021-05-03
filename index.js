import express from "express";
const app = express();
const port = 3000;
app.get("/", (req, res) => res.send(`Node & express running on port ${port}`));
app.listen(port, () => console.log(`your server running on port ${port}`));
