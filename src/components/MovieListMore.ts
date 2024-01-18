import { Component } from "../core/heropy";
import movieStore, { searchMovies } from '../store/movie'

export default class MovieListMore extends Component {
  constructor() {
    super({
      tagName: 'button'
    })
    movieStore.subscribe('pageMax', () => { //불러올 페이지가 더 있으면 버튼이 보이고 아니면 안보이게 처리
      const { page, pageMax } = movieStore.state
      // pageMax >= page 
      //   ? this.el.classList.remove('hide') 
      //   : this.el.classList.add('hide')
      if (pageMax > page) {
        this.el.classList.remove('hide')
      } else {
        this.el.classList.add('hide')
      }
    })
  }
  render() {
    this.el.classList.add('btn', 'view-more', 'hide')
    this.el.textContent = 'view more...'

    this.el.addEventListener('click', async () => {
      this.el.classList.add('hide') //버튼을 클릭 후 영화정보를 가져오기 전에 또 버튼 누르는 것을 방지
      await searchMovies(movieStore.state.page + 1) //movieStore.state.page는 1인데 버튼을 누를 때마다 1을 더해서 새로운 페이지번호를 할당
    })
  }
}