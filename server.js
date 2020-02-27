/*configurando servidor */
const express = require ("express")
const server = express()


//conf o servidor para apresentar arquivos estáticos
server.use(express.static('public'))

//habilit corpo do form
server.use(express.urlencoded({extended: true}))

//conf template engine
const nunjucks = require ("nunjucks")
nunjucks.configure("./",{
    express: server,
    noCache: true,
})
//lista doadores
const donors = [

    {
        name: "Lucyana Brito",
        blood: "AB+"
    },
    {
        name: "Filipi",
        blood: "AB+"
    },
    {
        name: "Matheus",
        blood: "AB+"
    },
    {
        name: "Sonic",
        blood: "AB+"
    }


]

//conf apresent da pagina.
server.get("/",function(req, res){

    return res.render("index.html", {donors})
})

server.post("/",function(req, res){
const name = req.body.name
const email = req.body.email
const blood = req.body.blood
//valores dentro do array
donors.push({
    name: name,
    blood: blood,
})
return res.redirect("./")
})

//iniciando servidor com essa porta.
server.listen(3000, function(){
    console.log("iniciei o servidor")

})

