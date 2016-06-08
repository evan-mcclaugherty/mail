module.exports = {
    parseRequest: function(namesAndEmails) {
        namesAndEmails = namesAndEmails.split('\r\n');
        namesAndEmails = namesAndEmails.map(each => {
            return each = each.split(',');
        });
        return namesAndEmails;
    },
    makeObjectArray: function(array, subject, emailContent) {
        let object = []
        for (let each of array) {
            object.push({
                first: each[0],
                last: each[1],
                email: each[2],
                subject: subject,
                emailContent: this.emailContent(each[0], each[1], each[2], emailContent)
            })
        }
        return object;
    },
    emailContent: function(first, last, email, emailContent) {
        return emailContent.replace(/{first}/g, first).replace(/{last}/g, last).replace(/{email}/g, email);
    }
}
