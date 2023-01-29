const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.static('public'));

app.set('view engine' , 'ejs');
app.set('views' , 'src/views');

app.use('/' , require('./src/routes/mainRouter'));

app.set('puerto',process.env.PORT || 3000)

app.listen(app.get('puerto'), ()=>console.log(`Servidor escuchando en puerto ${app.get('puerto')}`));