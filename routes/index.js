var express = require('express');
var router = express.Router();
var logic = require('../lib/serverLogic.js')
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {});
});

router.post('/', (req, res) => {
    let subject = req.body.subject;
    let namesAndEmails = req.body.namesAndEmails;
    let emailContent = req.body.emailContent;

    let persist = {
        namesAndEmails: namesAndEmails,
        subject: subject,
        emailContent: emailContent
    }
    let namesAndEmailsArray = logic.parseRequest(namesAndEmails);
    let namesAndEmailsObjArray = logic.makeObjectArray(namesAndEmailsArray, subject, emailContent);
    res.render('index', {
        persist: persist,
        namesAndEmailsObjArray: namesAndEmailsObjArray,
        numOfEmails: namesAndEmailsObjArray.length
    })
})
module.exports = router;
