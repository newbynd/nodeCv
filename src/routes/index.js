const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { title: 'Néstor Romero'});
    //res.sendFile(path.join(__dirname + '/views/index.ejs'));
});

router.get('/contact', (req, res) => {
    res.render('contact.html', {title: 'Contact me'});
});


module.exports = router;