import Component from './component'
import SolidClient from '../auth/solid-client'
import store from '../store/index'

export default class LoginButton extends Component {
  constructor () {
    super({
      store,
      element: document.querySelector('#sc-solid-button-login')
    })
    console.log('LoginButton init')
    this.element.onclick = async () => {
      console.log('LoginButton click')
      const solidClient = new SolidClient()
      const session = store.state.session.data

      if (session && Object.keys(session).length === 0 && session.constructor === Object) {
        const $solidOidcIssuer = document.querySelector('#solid-oidc-issuer')

        if ($solidOidcIssuer) {
          const solidOidcIssuerUrl = $solidOidcIssuer.value
          if (solidOidcIssuerUrl) {
            await solidClient.login(solidOidcIssuerUrl)
          }
        }
      } else {
        solidClient.logout()
      }
    }
  }

  render () {
    const $textElement = this.element.querySelector('.sc-solid-button__text')
    $textElement.innerText = store.state.session.data.session.info.webId === '' ? 'Log in' : 'Log out'
  }
}
