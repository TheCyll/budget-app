const express = require('express');
const registry = require('./routes/registry');
require('./config/config');
require('./db/db');
// const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
// app.use(cors());
// parse body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use('/registry', registry);

// use the build once finished
app.use(express.static(path.join(__dirname, '..', 'build')));


app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});