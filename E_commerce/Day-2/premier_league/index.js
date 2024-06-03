// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",myform);
var dataArr=JSON.parse(localStorage.getItem("jobApps")) || [];

function myform(){
    event.preventDefault();
    var matchnum = document.querySelector("#matchNum");
    var A=document.querySelector("#teamA");
    var B = document.querySelector("#teamB");
    var date = document.querySelector("#date");
    var venue=document.querySelector("#venue");

    var dataObj={
        matchnum:matchnum.value,
        A:A.value,
        B:B.value,
        date:date.value,
        venue:venue.value,
    };

dataArr.push(dataObj);
localStorage.setItem("jobApps",JSON.stringify(dataArr));
matchnum.value="";
date.value="";
 
}