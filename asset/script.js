$(document).ready(function(){
    var currentDate = moment().format('MMMM Do YYYY');
    $("#currentDay").text(currentDate)
});