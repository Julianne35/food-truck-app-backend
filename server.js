const mongoose = require("mongoose");

require('./models/CompanyMain');
require('./models/CompanySnapshot');
require('./models/CompanyDetails');
const app = require("./app");

const mongoURI = 
  "mongodb+srv://Julianne:bRSceTJH3U156fTv@food-credit-app.emwta.mongodb.net/food-credit-app?retryWrites=true&w=majority"

const conn = mongoose.createConnection(mongoURI);

mongoose.connect( mongoURI, 
    {useNewUrlParser: true}, 
    {useUnifiedTopology: true});

conn.once('open', () => {
    console.log('Connection Successful')
  })

conn.on("error", console.error.bind(console, "MongoDB connection error:"));

const server = app.listen(5000, () => {
    console.log(`Express running PORT ${server.address().port}`);
  });