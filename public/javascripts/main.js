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
        let count = 0;
        for (let each of array) {
            console.log(each);
            object.push({
                first: each[0],
                last: each[1],
                email: each[2],
                subject: subject,
                emailContent: emailContent
            })
        }
        return object;
    },
    replaceVariables: function(string) {
        return string.replace(/{(\w*)}/g, "{{$1}}")
    }
}
