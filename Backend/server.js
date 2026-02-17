require('dotenv').config()
const app = require('./src/app')
const connectdb = require('./src/DB/db')
const PORT = process.env.PORT || 3000;


connectdb()

app.listen(PORT,()=>{
    console.log("server is runing on port 3000")
});


