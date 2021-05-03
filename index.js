import express from "express";
import routes from "./src/routes/crmRoutes";
const app = express();
const port = 3000;
routes(app);
app.get("/", (req, res) => res.send(`Node & express running on port ${port}`));
app.listen(port, () => console.log(`your server running on port ${port}`));
