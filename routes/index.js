var express = require('express');
var router = express.Router();
var logic = require('../public/javascripts/main.js')
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {});
});

router.post('/', (req, res) => {
    let subject = req.body.subject;
    let persist = {
        namesAndEmails: req.body.namesAndEmails,
        subject: subject,
        emailContent: req.body.emailContent
    }
    let emailContent = logic.replaceVariables(req.body.emailContent);
    let namesAndEmailsArray = logic.parseRequest(req.body.namesAndEmails);
    console.log(req.body.emailContent);
    let namesAndEmailsObjArray = logic.makeObjectArray(namesAndEmailsArray, subject, emailContent);
    res.render('index', {
        persist: persist,
        namesAndEmailsObjArray: namesAndEmailsObjArray,
        numOfEmails: namesAndEmailsObjArray.length
    })
})
module.exports = router;
