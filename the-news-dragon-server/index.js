const express = require('express')
const app = express();
const port = process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send('dragon is running')
})
app.listen(port,()=>{
    console.log(`dragon api running on port: ${port}`)
})