import { currentSession, fetch } from 'solid-auth-client';

export default class SolidClient {
  constructor() { }

  async fetch(options, pathname = '') {
    const session = await currentSession()
    // This assumes that the data pod and WebID URL are on the same URI
    const base = new URL(session.webId).origin;
    const requestURL = `${base}${pathname}`
    console.log(`Putting to ${requestURL}`)
    return await fetch(requestURL, options);
  }

  async put(data) {
    return await this.fetch({
      method: 'PUT',
      body: data,
      headers: { "Content-type": 'text/plain' },
    }, '/public/text.text');
  }

  async post(options) {
    return await this.fetch(options)
  }

  async get(options) {
    return await this.fetch(options)
  }

  async patch(options) {
    return await this.fetch(options)
  }
}
