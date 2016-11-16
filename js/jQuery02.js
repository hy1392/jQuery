function myFunc(){
    //$("*").css("color","red"); //전체 선택
    //$("h1, input").css("color","red"); //태그 선택
    //$("#incheon").remove(); //id 선택
    //$(".myClass").css("background-color","yellow");//class 선택
    //$("[type=button]").css("background-color","yellow");//속성 선택자
    //$("div > ul > li[id]").css("color","red")//구조 선택자 > - 자식
    //$("div li[id=incheon]").css("color","red")// 공백 - 후손
    alert($("#incheon +").text());
}