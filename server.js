const express = require('express')
const path = require('path');
const app = express()

app.use(express.static('public'))

const PORT = process.env.PORT || 5000
 
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });

app.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/about.html'));
  });
 
app.listen(PORT, console.log(`Server running at ${PORT}`))