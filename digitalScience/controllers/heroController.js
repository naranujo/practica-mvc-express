var data = require('../data/sciencie')

const heroController = {
    index: (req,res) => {
        res.send(data.lista)
    },
    show: (req,res) => {
        let id = parseInt(req.params.id, 10)
        let arrayIds = []
        for (let i = 0; i < data.lista.length; i++) {
            arrayIds.push(data.lista[i].id)
        }
        if (arrayIds.includes(id)) {
            res.send(`Hola, mi nombre es ${data.lista[id].nombre} y soy ${data.lista[id].profesion}`)
        } else {
            res.send("No encontramos al científico indicado. Por favor, elija otro id")
        }
    },
    showBio: (req,res) => {
        let id = parseInt(req.params.id, 10)
        let ok = req.params.ok
        let arrayIds = []
        for (let i = 0; i < data.lista.length; i++) {
            arrayIds.push(data.lista[i].id)
        }
        if (arrayIds.includes(id) && ok == "") {
            res.send(`Hola, soy ${data.lista[id].nombre}. Lamento que no desees saber más sobre mi :(`)
        } else if (arrayIds.includes(id) && ok == "ok") {
            res.send(`${data.lista[id].resenia}`)
        } else if (arrayIds.includes(id) == false &&  ok == "ok") {
            res.send("No encontramos al científico indicado. Por favor, elija otro id")
        } else if (arrayIds.includes(id) == false &&  ok != "ok") {
            res.send("No encontramos al científico indicado. Por favor, elija otro id")
        }
    }
}

module.exports = heroController