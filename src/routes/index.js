import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { title: 'Néstor Romero'});
});

router.get('/contact', (req, res) => {
    res.render('contact.html', {title: 'Contact me'});
});

module.exports = router;