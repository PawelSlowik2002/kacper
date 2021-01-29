// document.getElementById("answer1").addEventListener("click", function() {

// });
// document.getElementById("answer2").addEventListener("click", function() {

// });
// document.getElementById("answer3").addEventListener("click", function() {

// });

// var saveAnswers;
// var deleteAnswers 

// var deleteAns = function() {
//     var Obj = {};
//     deleteAnswers(Obj)
// }
// var saveAns = function(){
//     var Obj = {}
//     saveAnswers(Obj)
// }

var przycisk1 = document.querySelector("#przycisk1")
przycisk1.addEventListener("click", function () {
    // if(!testLocalStorage()){
    //     console.log("nie dziala")
    // }else{
    //     saveAnswers = function(Answers) {

    //     };
    //     deleteAnswers = function(Answers){

    //     };
    //     loadAnswers = function(){
            
    //     };
    //     loadAnswers()
    // };
    console.log("idk")
    przycisk1.style.backgroundColor = "yellowgreen";
    var opcja1 = document.querySelector("#opcja1");
    opcja1.style.color = "yellowgreen"
        location.href = "answer1.html"
})
var przycisk2 = document.querySelector("#przycisk2")
przycisk2.addEventListener("click", function () {
    console.log("idk")
    przycisk2.style.backgroundColor = "green";
    var opcja2 = document.querySelector("#opcja2");
    opcja2.style.color = "green";
    location.href = "answer1.html"

})
var przycisk3 = document.querySelector("#przycisk3");
przycisk3.addEventListener("click", function () {
    console.log("idk")
    przycisk3.style.backgroundColor = "green";
    var opcja3 = document.querySelector("#opcja3");
    opcja3.style.color = "green"
    location.href = "answer1.html"

})


// document.getElementById("myBtn").onclick = function () {
//     location.href = "answer12.html"
// }

function linkfor(){
    document.querySelector(".button");
    location.href = "answer12.html"
}

function linkfor2(){
    document.querySelector(".button");
    location.href = "answer123.html"
}
// function linkfor3(){
//     document.querySelector(".button");
//     location.href = "answer1234.html"
// }


// var pages = ["answer1.html" , "answer12.html" , "answer123.html" ];

// if(document.querySelector(".button").clicked == true){
//     location.href = ++pages
//     console.log("w")
// }

// var testLocalStorage = function() {
//     var foo = "foo";
//     try{
//         localStorage.setItem(foo , foo)
//         localStorage.removeItem(foo)
//     }catch (e) {
//         return false
//     }
// }

// localStorage.setItem("Odpowiedz" , true)
// localStorage.setItem("prawda" , true);
// document.getElementById("#answer2") = localStorage.getItem("prawda")

// const saveAnswer = document.querySelector(".button");

// window.localStorage.setItem("answer" , JSON.stringify(saveAnswer));
// console.log(saveAnswer)
// window.localStorage.getItem("answer")
// console.log(saveAnswer)
// JSON.parse(window.localStorage.getItem('answer'));
// console.log(saveAnswer)

// if (typeof(Storage) !== "undefined") {
//     localStorage.setItem("answer", "cos");
//     document.querySelector("answer") = localStorage.getItem("answer");
//   } else {
//     document.querySelector("answer") = "nie dziala"
//   }