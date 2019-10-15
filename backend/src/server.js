const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-ersqf.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
//Requisições e o reenvio do usuário assim como as respostas ao browser
//Os mais importantes métodos dentro de uma API REST é GET , POST , PUT , DELETE

// req.query = Acessar query params
// req.params = Parametros de roteamento (para edição,delete)
// req.body = Acessar corpo da requisição (para criação e edição)
app.use(cors());
app.use(express.json());
app.use('/files',express.static(path.resolve(__dirname, '..' , 'uploads' )));
app.use(routes);

app.listen(3333);



