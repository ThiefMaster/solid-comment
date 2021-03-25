import store from '../store'
import { config } from '../config'
import Fetcher from './fetcher'

const STORAGE = {
  localStorage: 'localStorage',
  solidPod: 'solidPod'
}

export default class ActiveRecord {
  constructor () {
    if (this.constructor === ActiveRecord) {
      throw new Error('Cannot instantiate abstract class!')
    }

    this.connection = this.establishConnection(STORAGE.solidPod)
    this.storageEndpoint = config().serverStorageEndpointUrl
  }

  all () {
    this.connection.fetch()
    return this.elements
  }

  // TODO:
  async deleteFromApp () {
    Fetcher.delete(this.storageEndpoint, { url: this.resourceName })
  }

  async saveToApp () {
    Fetcher.postData(this.storageEndpoint, { url: this.resourceUrl })
  }

  async establishConnection (storageMechanism) {
    switch (storageMechanism) {
      case STORAGE.localStorage:
        this.establishLocalStorageConnection()
        break
      case STORAGE.solidPod:
        this.establishSolidPodConnection()
        break
      default:
        break
    }
  }

  async establishSolidPodConnection () {
    return store.state.solidClient.data
  }
}
