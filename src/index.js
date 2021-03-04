import { isString, isUndefined, isNil } from 'lodash'

import './assets/css/reset.css'
import './assets/css/styles.css'
import './assets/css/indico.css'
import { addToConfig, addObjectToConfig } from './config'
import App from './app'
import Comment from './models/comment'

export class SolidComment {
  constructor (configuration) {
    console.log('Solid Comment loaded2')
    addObjectToConfig(configuration)
    addToConfig('appName', 'Solid-Comment')
    addToConfig('resourceContainerPath', `solid-comment/${configuration.solidCommentId}`)
    const endpoint = configuration.serverStorageEndpointUrl
    if (!isString(endpoint) && !isNil(endpoint) && !isUndefined(endpoint)) {
      throw Error('Please specify a valid storage endpoint, that can receive JSON POST requests.')
    }

    if (process.env.NODE_ENV !== 'production') {
      console.log('Looks like we are in development mode!')
    }
  }

  async initApp () {
    console.log('SolidComment.initApp3')
    const app = new App()
    await app.boot()
  }

  setComments (comments) {
    console.log('SolidComment.setComments')
    addToConfig('comments', comments)
    Comment.all()
  }
}

window.SolidComment = SolidComment
