const server = require("./src/server");

const PORT = 8001;

server.listen(PORT,()=>{
    console.log(`Articles service lintening on ports ${PORT}`)
})