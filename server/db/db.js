const mongoose = require('mongoose');
require('../config/config');

mongoose.connect( MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then( () => {
  console.log('Database connected...');
}).catch( () => {
  console.log('Could not connect with database...');
});