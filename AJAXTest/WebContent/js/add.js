function callServer(){
	//javascript로 서버쪽 프로그램을 호출
	//ajax를 이용해서 처리해 보아요!!
	$.ajax({
		//호출할 서버쪽 프로그램의 url
		url : "http://localhost:8080/ajax/add",
		//전송 방식
		type : "GET",
		//서버로 전송할 데이터
		data : {
			arg1 : $("#arg1").val(),
			arg2 : $("#arg2").val()
		},
		success : function(result){
			$("span").text(result);
		},
		error : function(){
			$("span").text("에러 발생! 잠시후 다시 시도해주세요.");
		}
	});
}