import { Store } from '../core/heropy'

interface State {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}
interface Root {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}
export default new Store<State>({
  photo: 'https://i.pinimg.com/564x/2b/72/ac/2b72ac5e573b078ea39369bb1b7b0226.jpg',
  name: 'Yoonjeong Lim',
  email: '630yjl@gmail.com',
  blog: 'https://630room.notion.site/Tech-space-29936b4eaf5c46bf871fd88588815459?pvs=4',
  github: 'https://github.com/630yjl',
  repository: 'https://github.com/630yjl/vanillajs-movie-app'
})