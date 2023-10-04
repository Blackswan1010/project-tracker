var currentDate = $('#time');
var now = dayjs();

var currTime = now.format('MMM DD, YYYY [at] h:mm:ss A');
currentDate.text(currTime);


$( "#datepicker" ).datepicker();