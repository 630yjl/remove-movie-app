import { Component } from '../core/heropy'
import movieStore from '../store/movie'
import MovieItem from './MovieItem'

export default class MovieList extends Component {
  constructor() {
    super()
    movieStore.subscribe('movies', () => {
      this.render() 
    })
    movieStore.subscribe('loading', () => {
      this.render() 
    })
    movieStore.subscribe('message', () => {
      this.render() 
    })
  }

  render() {
    this.el.classList.add('movie-list')
    this.el.innerHTML = /*html*/ `
      ${movieStore.state.message 
        ? `<div class="message">${movieStore.state.message}</div>` //메세지 출력
        : '<div class="movies"></div>'}  <!--영화목록 출력-->
      <div class="the-loader hide"></div>
    `

    const moviesEl = this.el.querySelector('.movies')
    moviesEl?.append(//map은 배열데이터를 기준으로 콜백함수를 반복실행함 반환된 결과로 새로운 배열을 만들어 반환 / ?는 선택적 체이닝으로 moivesEl가 존재할때만 append메소드 동작하게 됨
      ...movieStore.state.movies.map(movie => {//appen를 쓰려면 전개연산자로 대괄호를 지워서 배열의 형태를 지워준다
        return new MovieItem({
          movie : movie
        }).el
      })
    )

    const loaderEl = this.el.querySelector('.the-loader')
    movieStore.state.loading 
      ? loaderEl?.classList.remove('hide') 
      : loaderEl?.classList.add('hide')
  }
}