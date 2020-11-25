export const state = () => ({
  messages: [
    { author: 'Danny', content: 'Pichula' },
    { author: 'Danny', content: 'Pichula2' },
    { author: 'Danny', content: 'Pichula3' },
    { author: 'Danny', content: 'Pichula4' },
    { author: 'Danny', content: 'Pichula5' },
    { author: 'Danny', content: 'Pichula6' },
  ],
})

export const mutations = {
  add(state, { author, content }) {
    state.messages.unshift({
      author,
      content,
    })
  },
}

export const getters = {
  list(state) {
    return state.messages
  },
}
