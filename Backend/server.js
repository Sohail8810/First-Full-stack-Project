require('dotenv').config()
const app = require('/Backend/Backend - Project/Backend/src/app')
const connectdb = require('/Backend/Backend - Project/Backend/src/DB/db');


connectdb()

app.listen(3000,()=>{
    console.log("server is runing on port 3000")
});


