const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@zuitt-batch197.kblestk.mongodb.net/ChatAPI?retryWrites=true&w=majority`, ()=> {
  console.log('connected to mongodb')
})
