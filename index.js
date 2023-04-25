const express = require('express')
const phones = require('./phone.json')
const app = express();
const port = 5000

app.get('/',(req, res)=> {
  res.send('my phone next server is comming soon')
})
app.get('/phone',(req,res)=>{
  res.send(phones)
})

app.get('/phone/:id', (req,res)=>{
  const id = parseInt(req.params.id);
  console.log(id);
  const phone = phones.find(phone => phone.id=== id)
  res.send(phone);
})

app.listen(port, ()=>{
  console.log(`my phone server is running on: ${port}`);
})