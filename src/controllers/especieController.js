const especie = require('../models/especieModel');

class especieController {
    
    async getAll( req, res, client ) {
        try {

            const contador = await client.db('test_db').collection('especie').countDocuments();
    
            console.log(contador);
            if(contador > 1) {
                res.status(201).send(`${contador} espécies catalogadas.`)
            } else {
                res.status(201).send(`${contador} espécie catalogada.`)
            }
    
        }
        catch {
            (err) => console.log(err);
        }
    }

    async searchOne( req, res, client ) {
        try {
            const { codEspecie } = req.body;
    
            const especie = await client.db('test_db').collection('especie').findOne({ 'codEspecie': codEspecie });
    
            if(!especie) {
                console.log(`Objeto ${especie.nomeComum} não encontrado!`);
                res.status(404).send(`Objeto ${codEspecie} não encontrado!`)
            } else {
                console.log(especie);
                res.status(201).send(
                    `Objeto ${nome} encontrado!`
                )
            }
    
        }
        catch {
            (err) => console.log(err);
        }
    }

    async addOne( req, res, client ) {
        try {
            const { codEspecie, nomeComum, codClasseTax } = req.body;
            const newEspecie = new especie({ codEspecie, nomeComum, codClasseTax });
            const response = await client.db('test_db').collection('especie').insertOne(newEspecie);
            console.log(response)
            res.status(200).send(`Objeto adicionado ao banco de dados especie!`);
        }
        catch {
            (err) => console.log(err);
        }
    }
}

module.exports = new especieController();