import App from './App';
import router from './routes/index'

 //typescript는 root를 찾지못했을때 반환될 수 있는  null이라는 데이터도 가지고 있는 상황이다 (element이거나 null이거나)
const root = document.querySelector('#root')
root?.append(new App().el) //? 선택적 체이닝을 통해 root가 있을 경우에만 .append가 실행되게 만들어줌 

router()
