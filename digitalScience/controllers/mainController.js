const mainController = {
    index: (req,res) => {
        res.send("Aquí encontrarás algunos de los científicos y matemáticos destacados en el mundo de la ciencia y de la programación. Esperamos te sorprendas.");
    },
    credits: (req,res) => {
        res.send("Copyright 2021 | Argentina | Nicolás Araujo")
    }
}

module.exports = mainController