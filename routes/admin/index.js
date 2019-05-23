var express = require('express');
var router = express.Router();
var db = require('../../config/db')

router.get('/',(req,res,next) => {
    res.send('admin/index.html')
})

router.get('/adminIndex', (req, res, next) => {
    db.query("SELECT * FROM stu_table").then((data) => {
        res.send(data);
    });
});

module.exports = router;