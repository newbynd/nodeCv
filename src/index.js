const express = require('express');
const path = require('path'); //para que identifique que S.O. utilizamos y parsee los paths correctos
const server = express();

//settings
server.set('port', 3000);
server.set('views', path.join(__dirname, 'views'));
//server.set('view engine', 'ejs');
server.engine('html', require('ejs').renderFile);

//middleware


//routes
server.use(require('./routes'));

//static files
server.use(express.static(path.join(__dirname, 'public')));

//server listening
server.listen(server.get('port'), () => {
    console.log('Servidor en puerto ', server.get('port'));
});