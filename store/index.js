import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    locales: ['en', 'zh'],
    locale: Cookies.get('locale') || 'zh'
  },
  mutations: {
    SET_LANG(state, locale) {
      if (state.locales.indexOf(locale) !== -1) {
        state.locale = locale
        Cookies.set('locale', locale)
      }
    }
  },
  actions: {
    setLanguage({ commit }, language) {
      commit('SET_LANG', language)
    }
  }
})

export default store
