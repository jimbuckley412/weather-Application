var timeDisplayEl = $('#time-display');
var projectFormEl = $('button');

function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}
projectFormEl.on('click', function() {
    displayTime();
})

