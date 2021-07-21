const express = require(`express`);
const logger = require(`morgan`);
const mongoose = require(`mongoose`);

const apiRoutes = require(`./routes/apiRoutes`);
const htmlRoutes = require(`./routes/htmlRoutes`);

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger(`dev`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`public`));

apiRoutes(app);
htmlRoutes(app);

let MONGODB_URI = process.env.MONGODB_CONNECTION || `mongodb://localhost/workout`;

mongoose.connect(MONGODB_URI);

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
