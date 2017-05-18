<template>
  <div id="maincontent">
    <b-jumbotron  v-for="article in articles" :header="article.title" >
        <p>For more information visit website</p>
        <b-btn variant="primary" @click="readdetail">Read</b-btn>
        <b-btn variant="sucess" @click="ubah">Update</b-btn>
        <b-btn variant="danger" @click="hapus(article)">Delete</b-btn>
    </b-jumbotron>
  </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default{
  data() {
    return {

    }
  },
  methods:{
    hapus:function(article){
      this.$store.dispatch('DELETE_ARTICLE', { deleteArticle : article })
      .then(response=>{
        this.$router.push('/')
      })
    }
  },
  computed: mapState([
    'articles'
  ])
}
</script>

<style scoped>
#maincontent{

}

</style>
