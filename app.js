/* imports */
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt= require('bcrypt')
const jwt= require('jsonwebtoken')

//Models
const User = require('./models/User')

//Inicia o Express
const app = express();

//Config JSON Response
app.use(express.json())

//Open Route - Public Route
app.get('/', (req, res) => {
    res.status(200).json({ msg: 'Bem vindo a nossa API!' })
})

//Registra Usuário
app.post('/auth/register', async (req, res) => {
    const { name, email, password, confirmpassword } = req.body

    // validations
if(!name) {
    return res.status(422).json({ msg : "O nome é obrigatório!"})
}
if(!email) {
    return res.status(422).json({ msg : "O email é obrigatório!"})
}
if(!password) {
    return res.status(422).json({ msg : "A senha é obrigaatória!"})
}
if(password !== confirmpassword) {
    return res.status(422).json({ msg : "Confirme sua senha!"})
}
})

//Credendenciais
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

//Realiza conexão com o banco de dados - baseado em promisses
mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.egfo5.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0`
).then(() => {
    app.listen(3000,
        console.log("Seja bem vindo a API!")
    )
    console.log('Conectado ao banco com sucesso!')
}).catch((erro) => console.log(erro, "Erro ao conectar no banco!"));

/*Disponibiliza um servidor em uma determinada porta*/
//app.listen(3000)