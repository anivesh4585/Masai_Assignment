// write js code here corresponding to matches.html
var matches= JSON.parse(localStorage.getItem("jobApps")) || [];

window.addEventListener("load",function(){
    displayData(matches);
});

function displayData(squad){
    document.querySelector("tbody").innerText="";

    squad.map(function(elem){

        var row =document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=elem.matchnum

        var td2=document.createElement("td");
        td2.innerText=elem.A;
        
        var td3= document.createElement("td");
        td3.innerText=elem.B;
        console.log(td3)
        var td4=document.createElement("td")
        td4.innerText=elem.date;

        var td5=document.createElement("td");
        td5.innerText=elem.venue;

        var td6=document.createElement("td");
        td6.innerText="ADD TO FAV";
        td6.setAttribute("class","fav");
        td6.addEventListener("click",function(){
            addToFavourite(elem);
        });

        row.append(td1,td2,td3,td4,td5,td6);
        document.getElementById("tbody").append(row);

    })

}
var favourites=JSON.parse(localStorage.getItem("favourite")) || [];
function addToFavourite(squad){
    favourites.push(squad)
    localStorage.setItem("favourite",JSON.stringify(favourites));
}

function handleVenue() {
    var selectedVenue = document.getElementById("filterVenue").value;
    var filterList = matches.filter(function (elem) {
        if (selectedVenue == "" || selectedVenue == "All") {
            return true;
        } else {
            return elem.venue === selectedVenue; // Use equality operator for comparison
        }
    });
    displayData(filterList);
}
