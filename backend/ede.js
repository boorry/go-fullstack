const express = require("express");
const app = express();
const mongoose = require("mongoose")
const port = 8080;
// please make sure to replace <Password> with the database password

const conn_str = 'mongodb+srv://sayna:sayna@sayna.xbohm.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(
conn_str,
{ 
useNewUrlParser: true, 
useUnifiedTopology: true 
},(err) => {
if (err) {
console.log(err);
} else {
console.log("mongodb is connected");
}});
//create a server object:
app.listen(port, () => {
console.log("starting the server");
}); 
//the server object listens on port 8080