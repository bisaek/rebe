var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.json({
        ko: 'muh',
        gris: {
            svar: '??',
            hvordor: 'hvorfor ikke'
        }
    })
});

module.exports = router;