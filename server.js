const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    'Chance the Rapper':{
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois',
        'age': 29
    },
    '21 Savage':{
        'birthName': 'Shin Aban Aleya',
        'birthLocation': 'London, England',
        'age': 29
    },
    'unknown':{
        'birthName': 'unknown',
        'birthLocation': 'unknown',
        'age': 0
    }
}

app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
   const rapperName = request.params.name.toLowerCase()
   if (rappers [rapperName]){
    response.json(rappers[rapperName])
   }else{
    response.json(rappers['unknown'])
   }
    
    
    
})

app.listen(PORT,()=>{
    console.log(`The server is now running on port ${PORT}! Better go catch it!`)
})