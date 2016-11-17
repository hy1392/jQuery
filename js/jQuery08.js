function myFunc() {
    //$("div").remove();
    //$("div").empty();
    var h1 = $("<h1></h1>").text("이것은 소리없는 아우성!!");
    var img = $("<img>").attr("src","img/test.png").attr("width","50");
    //<img src="img/test.png" width="50">
    //<h1></h1>만들어짐
    //1. 자식으로 맨 마지막에 붙이기
    //$("div").append(h1);
    //2. 자식으로 맨 앞에 붙이기
    //$("div").prepend(h1);
    //3. 형제로 앞에 붙이기
    //$("div > h1:nth-child(3)").before(h1);
    //4. 형제로 뒤에 붙이기
    //$("div > h1:first").after(h1);
    $("div > h1:nth-child(3)").before(img);
}

