$(document).ready(function() {
    $('.close').on('click', function(event) {
        let target = event.target;
        let emails = target.closest('.emails').remove();
        let number = +$('.numOfEmails').text();
        number--;
        if (number === 0) {
            $('.header').remove();
        } else {
            $('.numOfEmails').text(number);
        }
    });
});
