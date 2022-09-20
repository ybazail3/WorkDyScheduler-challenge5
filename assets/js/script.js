var dateDisplay = $('#currentDay');
var plannerText = $('.text');
var saveBtn = $('.fa-solid');
var hours = $('.hours')

// When we open the page we want current day to display using moment(
var dateDisplay = moment().format('MMM Do, YYYY')
$("#currentDay").text(dateDisplay)

// Different colors for different times

var presentTime = moment().hour();

var boxHours = $('.time-blocks');
var past = $('.past');
$('.text').each(function () {
    let displayTime = parseInt($(this).siblings('.hours').attr('id'))

    if (displayTime < presentTime) {
        $(this).addClass('past')
    } else if (displayTime == presentTime) {
        $(this).addClass('present')
    } else {
        $(this).addClass('future');
    }
})

// save  plannerText data w/local storage
// When refreshing page the text in the containers remained saved
//var saveInput = JSON.parse(localStorage.getItem('text'));
//console.log(saveInput)
$(".fa-solid").on('click', function () {
    //localStorage.setItem('text', JSON.stringify(text));
    var save = {
        am9: $('#9am').val(),
        am10: $('#10am').val(),
        am11: $('#11am').val(),
        pm12: $('#12pm').val(),
        pm1: $('#1pm').val(),
        pm2: $('#2pm').val(),
        pm3: $('#3pm').val(),
        pm4: $('#4pm').val(),
        pm5: $('#5pm').val()
    }
    console.log(save);
    localStorage.setItem('text', JSON.stringify(save));

});
// couldnt get it to display on screen
