function slideshow(){

    var arr=["https://sm.ign.com/t/ign_in/photo/d/dune-part-/dune-part-two-exclusive-new-poster-features-its-stellar-cast_z9xh.960.jpg"," https://cdn.entries.clios.com/styles/clio_aotw_ems_image_details_retina/s3/entry_attachments/image/74/2523/22197/144562/wv9KlnmGTyy69SUgUFCIrsehnbn7I1noWEaVijvY55M.jpg","https://static1.srcdn.com/wordpress/wp-content/uploads/2023/10/stranger-things-season-5-fan-poster.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKQHWtg93efTABMR6UvKNLpKf0U8dODIoyOYR7QykeFQ&s"]

    var div =document.getElementById("slideshow");

    var img =document.createElement("img");

    img.src=arr[0]

    div.append(img)

 // for slide image time interval
    var i =0
    setInterval(function () {

        if(i==arr.length){
            i=0
        }

        img.src=arr[i];
        i++;

    },3000)

}

slideshow()


var movies =[
    {
        name:"Dune",
        release_date:"12/12/2024",
        rating:9.1,
        img:"https://assets-prd.ignimgs.com/2024/01/24/dune2-insta-vert-montage-1638x2048-intl-1706086846940.jpg",

    },
    {
        name:"Sisu",
        release_date:"12/12/2024",
        rating:9.2,
        img:"https://m.media-amazon.com/images/I/71EkeNHKIkL._AC_UF894,1000_QL80_.jpg",

    },
    {
        name:"RRR",
        release_date:"12/12/2024",
        rating:8.0,
        img:"https://image.tmdb.org/t/p/original/kdO4JtO5DnIMyLymQv8C8Ol1CzA.jpg",

    },
    {
        name:"KGF Chapter 2",
        release_date:"12/12/2024",
        rating:8.2,
        img:"https://rukminim2.flixcart.com/image/850/1000/l3bx5e80/poster/u/n/e/small-kgf-poster-kgf-yash-movie-poster-for-room-kgf-chapter-2-original-imageh8sayhgnkkm.jpeg?q=90&crop=false",

    },
    {
        name:"John Wick",
        release_date:"12/12/2024",
        rating:9.5,
        img:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/b3c40a78219513.5cc812e957de6.jpg",

    },
    {
        name:"ShawShank Redemption",
        release_date:"12/12/2024",
        rating:9.8,
        img:"https://rukminim2.flixcart.com/image/850/1000/poster/h/m/z/posterskart-the-shawshank-redemption-poster-pksr01-medium-original-imaebcuhbuhfhryb.jpeg?q=90&crop=false",

    },
    {
        name:"Stranger Things",
        release_date:"12/12/2024",
        rating:9.0,
        img:"https://rukminim2.flixcart.com/image/850/1000/jr3t5e80/poster/a/w/f/medium-stranger-things-poster-for-room-office-13-inch-x-19-inch-original-imafcww8v99r4qhh.jpeg?q=20&crop=false",

    },
    {
        name:"Conjuring",
        release_date:"12/12/2024",
        rating:8.9,
        img:"https://m.media-amazon.com/images/I/81dzWlccrGS.jpg",

    },
    {
        name:"MS Dhoni The Untold Story",
        release_date:"12/12/2024",
        rating:9.3,
        img:"https://pics.filmaffinity.com/m_s_dhoni_the_untold_story_aka_m_s_dhoni_the_untold_story-885538722-large.jpg",

    },
    {
        name:"PK",
        release_date:"12/12/2024",
        rating:5,
        img:"https://bollywoodmovieposters.com/wp-content/uploads/2021/11/pk-movie-aamir-khan-poster.jpg",

    },
    {
        name:"Student of Year",
        release_date:"12/12/2024",
        rating:5.6,
        img:"https://moifightclub.files.wordpress.com/2011/01/soty.jpg",

    },
    {
        name:"ROAR",
        release_date:"12/12/2024",
        rating: 7.2,
        img:"https://m.media-amazon.com/images/M/MV5BMTk5OTkzNDc1NV5BMl5BanBnXkFtZTgwODg4NDExMzE@._V1_.jpg",

    },
    {
        name:"Into-The-Wild",
        release_date:"12/12/2024",
        rating:10,
        img:"https://www.tallengestore.com/cdn/shop/products/Into_The_Wild_-_Movie_Poster_Art_-_Tallenge_Hollywood_Poster_Collection_4db53cee-db42-4eff-ba0a-048a237fc851.jpg?v=1570086361",

    },
    {
        name:"Fight Club",
        release_date:"12/12/2024",
        rating:9.4,
        img:"https://m.media-amazon.com/images/I/81sZU-iKNGL.jpg",

    },
];
 
// if(localStorage.getItem("movies")==null){
   
// }

localStorage.setItem("movies",JSON.stringify(movies));

function showMovies(){

    var movies=JSON.parse(localStorage.getItem("movies"))||[];

    var movies_div=document.getElementById("movies");

    // Clear the existing content before showing sorted movies
    movies_div.innerHTML = "";

    movies.forEach(function (el){
        var div = document.createElement("div");

        var p_name=document.createElement("p");

        p_name.innerText=el.name;

        var p_release_date=document.createElement("p");
        p_release_date.innerText=el.release_date;

        
        var p_rating=document.createElement("p");

        p_rating.innerText=el.rating;

        var img=document.createElement("img");
        img.src=el.img;

        div.append(img,p_name,p_release_date,p_rating);

        movies_div.append(div);
    })

}
showMovies()

// sorting by rating

function handleRatingSort() {
    var selected = document.getElementById("sortRating").value;

    var movies = JSON.parse(localStorage.getItem("movies")) || [];

    if (selected === "sort-hl") {
        movies.sort(function (a, b) {
            return b.rating - a.rating;
        });
    } else if (selected === "sort-lh") {
        movies.sort(function (a, b) {
            return a.rating - b.rating;
        });
    }

    // Update the movies list with sorted data
    localStorage.setItem("movies", JSON.stringify(movies));

    // Show sorted movies
    showMovies();
}

// Trigger initial movie display
showMovies();

 
