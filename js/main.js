// Run our JQuery
$(document).ready(function(){
    // Global variables
    let buzzer = $("#buzzer")[0];
    let breakTime = 300;
    let workTime = 1500;
    let currentTime = workTime;
    let sessionTime = currentTime;
    let onDeck = "Break";
    let id = true;

    // Set start time
    $("#timer").text(secToTimeString(workTime));

    // Click handlers to adjust session and break times
    $("#session-down").click(function(){
        if (sessionTime == workTime && $("#session-time").text() > 1) {
            let pom = $("#session-time").text();
            pom--;
            $("#session-time").text(pom);
            sessionTime =
              currentTime =
              workTime = eval(minToSec($("#session-time").text()));
            $("#timer").text(secToTimeString(workTime));
        }
    });

    $("#session-up").click(function(){
        if (sessionTime == workTime) {
            let pom = $("#session-time").text();
            pom++;
            $("#session-time").text(pom);
            sessionTime =
              currentTime =
              workTime = eval(minToSec($("#session-time").text()));
            $("#timer").text(secToTimeString(workTime));
        }
    });
    
    $("#break-down").click(function(){
        if (sessionTime == workTime && $("#break-time").text() > 1) {
            let brk = $("#break-time").text();
            brk--;
            $("#break-time").text(brk);
            breakTime = eval(minToSec($("#break-time").text()));
        }
    });

    $("#break-up").click(function(){
        if (sessionTime == workTime) {
            let brk = $("#break-time").text();
            brk++;
            $("#break-time").text(brk);
            breakTime = eval(minToSec($("#break-time").text()));
        }
    });

    // Convert Break and Session time from minutes to seconds
    function minToSec(min) {
        return min * 60;
    }
    
    // Convert seconds to 00:00:00 format
    function secToTimeString(second) {
        let hour = 0;
        let minute = 0;

        hour = Math.floor(second / 3600);
        second = second - (3600 * hour);
        minute = Math.floor(second / 60);
        second = second - (60 * minute);

        return (hour > 0) ? n(hour) + ":" + n(minute) + ":" + n(second) : n(minute) + ":" + n(second);

        // Add a leading zero
        function n(n) {
            return n > 9 ? "" + n : "0" + n
        }
    }

});

