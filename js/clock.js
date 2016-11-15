function startClock() {
    //현재시간을 구해요!! "2016-11-15 20:07:10"
    //HTML div 영역을 JavaScript 객체로 들고와요!! ==> document object(문서 객체)
    var div = document.getElementById("clockDiv");

    //1초마다 반복적으로 현재 시간을 구해서 div에 출력
    //window.setInterval("반복할 함수", 시간);
    window.setInterval(function() {
        //현재 시간을 구해요!
        var today = (new Date()).toLocaleString();
        div.innerHTML = today;
    },1000);
}