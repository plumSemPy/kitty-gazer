require('babel-register');

const express = require('express');
const bodyParser = require('body-parser');

const App = require('./App')

const app = express();
const router = express.Router();

const PORT = process.env.PORT || 3333;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
 res.setHeader("Access-Control-Allow-Origin", "*");
 res.setHeader("Access-Control-Allow-Credentials", "true");
 res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
 res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

 res.setHeader("Cache-Control", "no-cache");
 next();
});


router.get("/", (req, res) => {
 res.json({ message: "API Initialized!"});
});
app.use("/api", router);
app.listen(PORT, () => {
 console.log('hi');
});