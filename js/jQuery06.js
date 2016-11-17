function myFunc() {
   /* $("ul > li").each(function (idx, item) {
        console.log($(item).text()+"입니다!");
    });*/
    //idx - index번호
    //item - 현재 선택된 문서 객체
    $("ul > li").addClass("myStyle");
}

function inStyle(m) {
    //현재 선택된 li에 대하여 style을 적용
    $(m).addClass("inStyle");
    $(m).removeClass("outStyle");
}

function outStyle(m) {
    //현재 선택된 li에 대하여 style을 적용
    $(m).addClass("outStyle");
    $(m).removeClass("inStyle");
}