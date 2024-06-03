// write js code here corresponding to favourites.html
var favourites = JSON.parse(localStorage.getItem("favourite")) || [];
displayFavourite(favourites);

function displayFavourite(squad){
    document.getElementById("tbody").innerText="";
    squad.map(function (elem,index){
        var row =document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=elem.matchnum

        var td2=document.createElement("td");
        td2.innerText=elem.A;
        
        var td3= document.createElement("td");
        td3.innerText=elem.B;

        var td4=document.createElement("td")
        td4.innerText=elem.date;

        var td5=document.createElement("td");
        td5.innerText=elem.venue;

        var td6=document.createElement("td");
        td6.innerText="Delete";
        td6.setAttribute("class","remove");

        td6.addEventListener("click",function(){
            deleteFavourite(index);
        });
        row.append(td1,td2,td3,td4,td5,td6);
        document.getElementById("tbody").append(row);
    })
}

function deleteFavourite(index){
    favourites.splice(index,1);
    localStorage.setItem("favourite",JSON.stringify(favourites));
    displayFavourite(favourites);
};