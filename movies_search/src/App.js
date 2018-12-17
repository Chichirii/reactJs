import React, { Component } from 'react';
import './App.css';
import MovieRow from './movieRow.js'
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    //console.log("This is my initializer")

    // const movies = [
    //   {id: 0,
    //     poster_src: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    //     title: "Avengers: Infinity War",
    //     overview: "Placeholder movie description."},
    //   {id: 1,
    //     poster_src: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/t90Y3G8UGQp0f0DrP60wRu9gfrH.jpg",
    //     title: "Avengers: Age of Ultron",
    //     overview: "Another placeholder movie description."}
    // ];
    //
    // const movieRows = [];
    //  movies.forEach((movie) => {
    //    console.log(movies.title);
    //    const movieRow = <MovieRow movie={movie}/>
    //    movieRows.push(movieRow)
    //  });
    //
    // this.state = {rows: movieRows}

    this.performSearch("ant man")
  }

  performSearch(searchTerm) {
    console.log("perform search using movieDb");
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=4f289fa62bf52d8c42974b0f7c1d1d56&language=en-US&&page=1&include_adult=true&query=" + searchTerm;
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully");
        //console.log(searchResults);
        const results = searchResults.results;
        //console.log(results[0]);

        const movieRows = [];

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + movie.poster_path
          //console.log(movie.poster_path);
          const movieRow = <MovieRow key={movie.id} movie={movie}/>;
          movieRows.push(movieRow)
        });

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("failed to fetch data");
      }
    })

  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const searchTerm = event.target.value;
    this.performSearch(searchTerm)
  }

  render() {
    return (
      <div className="App">
        <table className={"titleBar"}>
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50" src="movieDB_icon.svg"/>
              </td>
              <td>
                  <h3>MoviesDB Search</h3>
              </td>
              <td width="8"/>
            </tr>
          </tbody>
        </table>

        <input style={{
          fontSize: 24,
            display: 'block',
            width: '199%',
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16
        }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term"/>

          {this.state.rows}

      </div>
    );
  }
}

export default App;
