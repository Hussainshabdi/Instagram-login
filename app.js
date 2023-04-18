const express = require('express');
const app = express();
const path = require('path');
const port = 80;
const fs = require('fs');


app.use('/static',express.static('static'));
app.use(express.urlencoded());

app.set('view engine','pug');
app.set('views',path.join(__dirname,"views"));

app.get('/',(req,res)=>{
    const params = {'title':'','message':''};
    res.render('demo.pug',params);
})

app.post('/',(req,res)=>{
   email = req.body.email
   password = req.body.password    

   let out = `the name is ${email} and password is ${password} `;
    fs.writeFileSync('output.txt',out);

   
})




app.listen(port,()=>{
    console.log(`server is running on${port}`);
})