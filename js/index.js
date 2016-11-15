//alert("경고창이 떠요!");

var test1=100;
var test2=true;
var test3="소리없는 아우성!!";
var test4=null;
var test5;
console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);

//선언적 함수
function myFunc(temp1, temp2) {
    return temp1+temp2;
}

var result = myFunc(10,20);
console.log(result);

//익명함수 = Lambda function
var test = function (temp1, temp2){
    return temp1+temp2;
};
console.log(test(1,2));
//property : method
var obj = {
    name : "hyungook kim",
    age : 22,
    major : "CSE",
    info : function(){
        alert(this.name +" "+ this.age +" "+ this.major);
    },
    "my hobby" : "오버워치"
}
console.log(obj);
console.log(obj.name);
console.log(obj["age"]);
console.log(obj["major"]);
//console.log(obj.info());


