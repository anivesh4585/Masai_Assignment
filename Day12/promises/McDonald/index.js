function slideshow(){

    var arr=["https://static1.thetravelimages.com/wordpress/wp-content/uploads/2023/08/fries-from-mcdonalds.jpg","https://mcdonaldsblog.in/wp-content/uploads/2023/02/Meals-to-Beverages-McDonalds-has-it-all.png","https://e7.pngegg.com/pngimages/589/675/png-clipart-mcdonald-s-junk-food-fast-food-cuisine-of-the-united-states-hamburger-junk-food-mcdonald-s-junk-food.png","https://media.istockphoto.com/id/458665063/photo/big-mac-menu.jpg?s=612x612&w=0&k=20&c=DwcRBLn5YgLbG9YR_oPHlQ_ypMkwuU4YFeV5vDd_3eY="]

    let div =document.getElementById("slideshow");

    let img =document.createElement("img");

    img.src=arr[0]

    div.append(img)

 // for slide image time interval
    let i =0
    setInterval(function () {

        if(i==arr.length){
            i=0
        }

        img.src=arr[i];
        i++;

    },3000)

}

slideshow()