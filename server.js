const express = require('express')
const app = express()
const path=require('path')

var dir = path.join(__dirname,'build')

app.use(express.static(dir))


// app.use((req,res,next) => {
// res.header('Access-Control-Allow-Origin', "*");
// res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
// res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content-Type, Accept');
// next();
// })

app.get('/test', (req, res) => {
    res.send({"msg":"server is runing baby"});
}
);

app.get('/', (req, res) => {
  res.sendFile("index.html");
}
);




app.listen(process.env.PORT||3000,function(){
  console.log("ON BABY!!!!");
});