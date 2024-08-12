let person = {
  name: "John doe",
  age: 30,
  city: "new york",
};
person.email = "emailEadders";
console.log(person)
//

const hasKey=(object, key)=> {
  if (object[key]== undefined) {
    return false;
  }else{
return true;
  }

}
console.log(hasKey(person, "city"));

//2

const movies = [
    {
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      year: 1994,
      genre: "Drama",
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: 1972,
      genre: "Crime",
    },
    {
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      year: 1994,
      genre: "Crime",
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      year: 2008,
      genre: "Action",
    },
    {
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      year: 1994,
      genre: "Drama",
    },
  ];
  function printMoviesTitles(movies) {
    movies.forEach(movie => {
        console.log(movie.title);
    })
  }
  //
  printMoviesTitles(movies)

  // 5
  function countMoviesFrom1994(movies){
    let count = 0;
    movies.forEach(movie => {
        if (movie.year == 1994){
            count = count +1;
        }
    })
    return count;
  }
  console.log(countMoviesFrom1994)

  //6
  function updateGener(movies){
    movies.forEach(movie => {
        if(movie.title == "The Dark Knight"){
            movie.genre ="action,drama";
        }else {
            return movie;
        }
    })
    return updateGene;
  } console.log(updateGener)
