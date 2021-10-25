let http = require("http");
let fs = require("fs")
let express = require("express");

let app = express();

app.use(express.static('./Site'));

app.post('/criar-usuario', (request, response) => {
    const user = request.body;
    fs.writeFile(user.cpf+'.txt', user, function(error){
        if(error) throw error
        return response.send('Usuario criado com sucesso')
    })
})

var server = http.createServer(app);

server.listen(3000);

console.log("a")