const express = require('express');
const cors = require('cors');
const registry = require('./routes/registry');
require('./config/config');
require('./db/db');
const bodyParser = require('body-parser');

const app = express();

// parse body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use('/registry', registry);

app.use(cors());
// use the build once finished
// app.use(express.static(path.join(__dirname, '..', 'build')));


app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});