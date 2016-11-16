function myFunc() {
    console.log($("#apple").text());
    console.log($("#pineapple").text());
    console.log($("ul >li.myList").text());// text()태그 사이에 있는 값 반환
    //console.log($("#uId")["selector"].substring(1,4));
    console.log($("form > input").attr("id"));
    console.log($("ol > li.myList:first").text());
    console.log($("ol > li:nth-child(2)").text());
    console.log($("ol > li.myList:last").text());
    console.log($("#uId").val());// val() 태그가 가진 값 반환
}