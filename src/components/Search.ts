import { Component } from '../core/heropy'
import movieStore, { searchMovies } from '../store/movie'

export default class Search extends Component {

  render() {
    this.el.classList.add('search')
    this.el.innerHTML = /*html*/ `
      <input value="${movieStore.state.searchText}" placeholder="Enter the movie title to search!">
      <button class="btn btn-primary">
        Search!
      </button>
    `

    const inputEl = this.el.querySelector('input') 
    inputEl?.addEventListener('input', () => {
      movieStore.state.searchText = inputEl.value
    })
    inputEl?.addEventListener('keydown', event => { //엔터키를 누르면 검색
      if (event.key === 'Enter' && movieStore.state.searchText.trim()) { //trim 메소드는 앞 뒤 공백 문자를 제거하는 것 - 앞뒤 공백을 제거하고도 문자가 있으면 true 문자데이터가 없다면 false
        searchMovies(1)
      }
    })

    const btnEl = this.el.querySelector('.btn')//검색버튼을 누르면 검색
    btnEl?.addEventListener('click', () => {
      if (movieStore.state.searchText.trim()) {
        searchMovies(1)
      }
    })
  }
}