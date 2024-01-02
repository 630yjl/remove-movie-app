import { Store } from "../core/heropy";

const store = new Store({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
  movie: {},
  loading: false,
  message: 'Search for the movie title!'
})
//`https://www.omdbapi.com/?i=tt3896198&apikey=c945ff41&s=${store.state.searchText}&page=${page}

//s - Movie title to search for
//page - Page number to return (1페이지에 10개의 영화정보를 불러옴)
export default store
export const searchMovies = async page => {
  store.state.loading = true
  store.state.page =  page //매개변수로 받은 page의 값을 할당 (viewmore버튼을 눌럿을떄 새로운 페이지 번호가 할당될 수 있게) 
  if (page === 1) {//새로운 내용 검색시 기존 화면에 보여지던 내용 초기화
    store.state.movies = []
    store.state.message = ''
  }
  try {
    const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=c945ff41&s=${store.state.searchText}&page=${page}`)
    const { Search, totalResults, Response, Error } = await res.json() 
    if (Response === 'True') {
      store.state.movies = [
        ...store.state.movies,
        ...Search
      ]
      store.state.pageMax = Math.ceil(Number(totalResults) / 10) //Number:문자데이터->숫자데이터 Math.ceil:숫자 올림처리
    } else {
      store.state.message = Error
      store.state.pageMax = 1
    }
  } catch (error) {
    console.log('searchMoives error:', error)
  } finally { //finally 구문은 항상 실행
    store.state.loading = false
  }
}

export const getMovieDetails = async id => {
  try {//i - 영화 id값으로 불러오기 , plot - 영화 줄거리 가져오는 방식(short, full)
    const res = await fetch(`https://www.omdbapi.com/?apikey=c945ff41&i=${id}&plot=full`)
    store.state.movie = await res.json()
  } catch (error) {
    console.log('getMovieDetails error:', error)
  }
}

