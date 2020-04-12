// Run our JQuery
$(document).ready(function(){
    let buzzer = $('#buzzer')[0];
    let sessionCount = parseInt($("#session-time").html());
    let breakCount = parseInt($("#break-time").html());

    $("#session-down").click(function(){
        if(sessionCount > 0) {
            sessionCount -= 1;
            $("#session-time").html(sessionCount);
        }
    });

    $("#session-up").click(function(){
        if(sessionCount < 60) {
            sessionCount += 1;
            $("#session-time").html(sessionCount);
        }
    });
    
    $("#break-down").click(function(){
        if(breakCount > 0) {
            breakCount -= 1;
            $("#break-time").html(breakCount);
        }
    });

    $("#break-up").click(function(){
        if(breakCount < 30) {
            breakCount += 1;
            $("#break-time").html(breakCount);
        }
    });
});