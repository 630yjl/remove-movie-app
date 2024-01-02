import { Component } from '../core/heropy'


export default class MovieItem extends Component {
  constructor(props) {
    super({
      props,
      tagName: 'a'
    })
  }
  render() {
    const { movie } = this.props

    this.el.setAttribute('href', `#/movie?id=${movie.imdbID}`)
    this.el.classList.add('movie')
    this.el.style.backgroundImage = `url(${movie.Poster})` //style.backgroundImage - css속성 할당
    this.el.innerHTML  = /*html*/ `
      <div class="info">
        <div class="year">
          ${movie.Year}
        </div>
        <div class="title">
          ${movie.Title}
        </div>
      </div>
    `
  }
}