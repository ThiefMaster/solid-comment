import Component from './component'
import store from '../store'

export default class CommentInput extends Component {
  constructor () {
    super({
      store,
      element: document.querySelector('#sc-comment-form__input')
    })
    this.onlyShowWhenLoggedIn()
    this.element.oninput = () => {
      store.dispatch('setCommentInput', { state: 'idle', data: this.element.value })
    }
  }

  render () {
    this.onlyShowWhenLoggedIn()
    this.element.innerHTML = store.state.commentInput.data
  }
}
