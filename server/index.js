const express = require('express')

const app = express()

app.get('/data',(req,res)=>{
    const dummy = [
        {
            username:'sarthak',
            city:'Bhopal',
            age:30
        }
    ]
    res.setHeader('Access-Control-Allow-Origin','http://localhost:5173').json({data:dummy})
})

app.listen(8000,()=>{
    console.log('server is running at 8000');
})