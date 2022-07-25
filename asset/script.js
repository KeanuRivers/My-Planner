$(document).ready(function(){
    //Date and time set
    var currentDate = moment().format('MMMM Do YYYY');
    $("#currentDay").text(currentDate);

    //Save Button Columns, setting and getting local storage
    $('.saveBtn').click(function () {
        var dateTime = $(this).attr("date-time");
        var timeData = $(`#${dateTime}`).val(); 
        localStorage.setItem(dateTime, timeData);
        console.log(`value:${timeData} time:${dateTime}`);  
    });

    $("#9").val(localStorage.getItem('9'));
    $("#10").val(localStorage.getItem('10'));
    $("#11").val(localStorage.getItem('11'));
    $("#12").val(localStorage.getItem('12'));
    $("#1").val(localStorage.getItem('1'));
    $("#2").val(localStorage.getItem('2'));
    $("#3").val(localStorage.getItem('3'));
    $("#4").val(localStorage.getItem('4'));
    $("#5").val(localStorage.getItem('5'));

//syncing color colums with the time
var currentHour = moment().hours();
$('.input').each
});
