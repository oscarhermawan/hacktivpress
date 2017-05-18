import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    articles:[]
  },
  actions: {
    LOAD_ARTICLES_LIST: function ({ commit }) {
      axios.get('http://localhost:3000/articles').then((response) => {
        commit('SET_ARTICLES_LIST', { list: response.data })
      }, (err) => {
        console.log(err)
      })
    },
    DELETE_ARTICLE: function ({ commit}, { deleteArticle }) {
      console.log(deleteArticle);
      axios.delete(`http://localhost:3000/articles/${deleteArticle._id}`)
      .then((response) => {
        commit('DELETE_ARTICLE', { list: response.data })
      }, (err) => {
        console.log(err)
      })
    }
  },
  mutations: {
    SET_ARTICLES_LIST: (state, { list }) => {
      state.articles = list
    },
    DELETE_ARTICLE: (state, { list }) => {
      let idx = state.articles.map(p => p._id).indexOf(list._id)
      state.articles.splice(idx, 1)
    }
  },
  getters: {
    getArticles: state => {
      return state.articles.filter(article => !article.completed)
    }
  }
})

export default store
