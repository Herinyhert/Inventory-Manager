const server = require("./src/seerver");

const PORT = 8001;

server.listen(PORT,()=>{
    console.log(`Characters service lintening on port`)
})