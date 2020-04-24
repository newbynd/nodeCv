//REQUISITOS
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path'); //para que identifique que S.O. utilizamos y parsee los paths correctos
const history = require('connect-history-api-fallback');
const server = express();

//MIDDLEWARE
server.use(morgan('tiny'));
server.use(cors());
server.use(express.urlencoded({extended: true}));
server.use(express.json());

//ROUTES
server.use(require('./routes'));

//MIDDLEWARE para Vue.js modo History
server.use(history());
server.use(express.static(path.join(__dirname, 'public')));

//SETTINGS
server.set('port', process.env.PORT || 3000);
server.set('views', path.join(__dirname, 'views'));
server.listen(server.get('port'), () => {
    console.log('Servidor en puerto ', server.get('port'));
});

//server.set('view engine', 'ejs');
server.engine('html', require('ejs').renderFile);