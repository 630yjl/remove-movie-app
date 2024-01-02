import { Component } from "../core/heropy";
import movieStore, { getMovieDetails } from "../store/movie"

export default class Movie extends Component {
  async render() {
    //데이터를 가져오기전 스켈레톤 UI보임
    this.el.classList.add('container', 'the-movie')
    this.el.innerHTML = /*html*/ `
      <div class="poster skeleton"></div>
      <div class="specs">
        <div class="title skeleton"></div>
        <div class="labels skeleton"></div>
        <div class="plot skeleton"></div>
      </div>
    `

    await getMovieDetails(history.state.id)
    console.log(movieStore.state.movie)
    const { movie } = movieStore.state
    const bigPoster = movie.Poster.replace('SX300', 'SX700') //replace -문자데이터에 특정한 문자를 다른 문자로 대체하는 용도('변경하고싶은문자', '대체할문자')

    this.el.innerHTML = /*html*/ `
      <div style="background-image: url(${bigPoster})"class="poster"></div>
      <div class="specs">
        <div class="title">
          ${movie.Title}
        </div>
        <div class="labels">
          <span>${movie.Released}</span><!--&nbsp; 띄어쓰기-->
          &nbsp;/&nbsp;
          <span>${movie.Runtime}</span>
          &nbsp;/&nbsp;
          <span>${movie.Country}</span>
        </div>
        <div class="plot">
          ${movie.Plot}
        </div>
        <div>
          <h3>Ratings</h3><!--map은 콜백안에서 반환하는 문자데이터를 각각의 아이템으로 새로운 배열 반환 / join으로 빈문자열로 합치기 -->
          <!-- [ map으로만 하면 배열데이터로 반환된다
              "<p>Internet Movie Database - 7.4/10</p>",
              "<p>Rotten Tomatoes - 90%</p>",
              "<p>Metacritic - 75/100</p>"
                ] -->
          ${movie.Ratings.map(rating => {
            return `<p>${rating.Source} - ${rating.Value}</p>`
          }).join('')}
        </div>
        <div>
          <h3>Actors</h3>
          <p>${movie.Actors}</p>
        </div>
        <div>
          <h3>Director</h3>
          <p>${movie.Director}</p>
        </div>
        <div>
          <h3>Production</h3>
          <p>${movie.Production}</p>
        </div>
        <div>
          <h3>Genre</h3>
          <p>${movie.Genre}</p>
        </div>
      </div>
    `
  }
} 