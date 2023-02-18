
const movies = [
  { title: "The Shawshank Redemption", genre: "Drama" },
  { title: "The Godfather", genre: "Crime" },
  { title: "The Godfather: Part II", genre: "Crime" },
  { title: "The Dark Knight", genre: "Action" },
  { title: "12 Angry Men", genre: "Drama" },
  { title: "Schindler's List", genre: "Drama" },
  { title: "The Lord of the Rings: The Return of the King", genre: "Adventure" },
  { title: "Pulp Fiction", genre: "Crime" },
  { title: "The Good, the Bad and the Ugly", genre: "Western" },
  { title: "Fight Club", genre: "Drama" },
  { title: "Forrest Gump", genre: "Drama" },
  { title: "Inception", genre: "Action" },
  { title: "The Lord of the Rings: The Fellowship of the Ring", genre: "Adventure" },
  { title: "Star Wars: Episode V - The Empire Strikes Back", genre: "Action" },
  { title: "The Lord of the Rings: The Two Towers", genre: "Adventure" },
  { title: "The Matrix", genre: "Action" },
  { title: "Goodfellas", genre: "Crime" },
  { title: "One Flew Over the Cuckoo's Nest", genre: "Drama" },
  { title: "Seven Samurai", genre: "Adventure" },
  { title: "Se7en", genre: "Crime" },
  { title: "City of God", genre: "Crime" },
  { title: "The Silence of the Lambs", genre: "Thriller" },
  { title: "It's a Wonderful Life", genre: "Drama" },
  { title: "Life is Beautiful", genre: "Comedy" },
  { title: "The Usual Suspects", genre: "Crime" },
  { title: "Léon: The Professional", genre: "Action" },
  { title: "Spirited Away", genre: "Animation" },
  { title: "Saving Private Ryan", genre: "Drama" },
  { title: "Interstellar", genre: "Adventure" },
  { title: "The Green Mile", genre: "Drama" },
  { title: "The Prestige", genre: "Drama" },
  { title: "The Intouchables", genre: "Comedy" },
  { title: "The Lion King", genre: "Animation" },
  { title: "The Pianist", genre: "Drama" },
  { title: "The Departed", genre: "Crime" },
  { title: "Whiplash", genre: "Drama" },
  { title: "Gladiator", genre: "Action" }
]


let title_screen = document.getElementById("title");
let genre_screen = document.getElementById("genre");
let search = document.getElementById("search");
let result= document.getElementById("results");
let counting= document.getElementById("counting");

let final_dispaly=[]
search.addEventListener("click", function (e) {
  // to test its work or not
  // console.log("button clicked");
  // console.log(title.value);

  
  if (title_screen.value) {
  
    final_dispaly= searchByTitle(title_screen.value.trim()); // trimming the search result
  
  displayResults(final_dispaly);
  }
  //  genre_srceen.value  check it exist or not then work conditions
  else if(genre_screen.value) {
   
    final_dispaly=searchByGenre(genre_screen.value.trim());
   
   displayResults(final_dispaly)
  }

})

function searchByTitle(title_str) {
  console.log("hello its work?")
//  array(movies)    
  return(movies.filter(movie_list =>movie_list.title.toLowerCase().includes(title_str.toLowerCase())
  ))
    // title here(in the object of movies above)
  

}
function searchByGenre(genre_str) {
return (movies.filter(movie_list=> movie_list.genre.toLowerCase().includes(genre_str.toLowerCase())));

}

function displayResults(list){
  result.innerHTML =""; //it clear the first search display and then print new search result
  list.map(element=>{
    let add= `<li>${element.title} (${element.genre}) </li>`
    console.log(add);
    result.innerHTML += add;
  })
  countByGenre(list);
}

function sortByTitle(){
  console.log("triggered")
  const arrange= final_dispaly.sort((a,b)=> a.title.localeCompare(b.title))
  displayResults(arrange);
}

function sortByGenre(){
  console.log("triggered")
  const arrange= final_dispaly.sort((a,b)=> a.genre.localeCompare(b.genre))
  displayResults(arrange);
}


function countByGenre(list){
  let countObject = {};
  list.map(item => {
     
      countObject[item.genre] = (countObject[item.genre] | 0) + 1;
  })
  counting.innerHTML = '';
  for(key in countObject) {
      console.log(key);
      countTag.innerHTML += `<li>${key} : ${countObject[key]}</li>` 
  }

}

//search for both
function searchBoth(title, genre){
  return movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase().trim()) && movie.genre.toLowerCase().includes(genre.toLowerCase().trim()));
}