export default {
  setSession(context, payload) {
    context.commit('setSession', payload)
  },
  updateInput(context, payload) {
    context.commit('updateInput', payload)
  },
}
