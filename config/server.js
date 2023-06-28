//ligando o back-end
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5050;


//linkando o css
app.use(express.static(__dirname + '../../' + '/public'));
//renderização em html, estamos usando EJS(entende que esta do dir views)
app.set('views',__dirname + '../../' + '/views');
//2 pontos para sair do config e procurar views.
app.set("view engine", "ejs");

//criando rota 
app.get("/", function(req,res){
    res.render("pages/inicio");
})
app.get("/sobre", function(req,res){
    res.render("pages/sobre");
})
app.get("/projetos", function(req,res){
    res.render("pages/projetos");
})
app.get("/skills", function(req,res){
    res.render("pages/skills");
})
app.get("/contato", function(req,res){
    res.render("pages/contato");
})

app.listen(PORT , () => console.log( `Servidor está rodando na porta ${PORT}`));
