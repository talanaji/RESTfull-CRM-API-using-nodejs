import express from "express";
import routes from "./src/routes/crmRoutes";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
//mongoose connection 
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => console.log('MongoDB Connected...'))
.catch((err) => console.log(err));
//body parser setup
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get("/", (req, res) => res.send(`Node & express running on port ${port}`));

routes(app);
app.listen(port, () => console.log(`your server running on port ${port}`));
