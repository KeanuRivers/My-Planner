$(document).ready(function(){
    var currentDate = moment().format('MMMM Do YYYY');
    $("#currentDay").text(currentDate);
    $('.saveBtn').on("click", function () {
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
});
