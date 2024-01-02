import { Component } from '../core/heropy'

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: 'header',
      state: {
        menus: [
          {
            name: 'Search',
            href: '#/'
          },
          {
            name: 'Movie',
            href: '#/movie?id=tt4520988'
          },
          {
            name: 'About',
            href: '#/about'
          }
        ]
      }
    })
    window.addEventListener('popstate',() => { //popstate 페이지가 바뀔때마다 동작하는 이벤트
      this.render();
    })
  }
  render() {
    this.el.innerHTML = /*html*/ `
      <a href="#" class="logo"><span>OMDbAPI</span>.COM</a>
      <nav>
        <ul>
          ${this.state.menus.map(menu => {
            const href = menu.href.split('?')[0] //split으로 기준이 되는 문자로 나누어 배열로 만든다. 기준이 되는 문자가 없으면 첫번째 배열이 됨
            const hash = location.hash.split('?')[0]
            const isActive = href === hash
            return /*html*/ `
              <li>
                <a class="${isActive ? 'active' : ''}" href="${menu.href}">${menu.name}</a>
              </li>
            `
          }).join('')}
        </ul>
      </nav>
      <a href="#/about" class="user">
        <img src="https://i.pinimg.com/564x/2b/72/ac/2b72ac5e573b078ea39369bb1b7b0226.jpg" alt="User">
      </a>
    `
  }
}