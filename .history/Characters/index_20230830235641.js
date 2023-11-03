const server = require("./src/seerver");

const PORT = 8001;

server.listen(PORT,()=>{
    console.log(`articles service lintening on ports ${PORT}`)
})