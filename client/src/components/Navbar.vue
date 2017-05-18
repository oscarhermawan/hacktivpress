<template>
  <div>
      <b-navbar toggleable type="inverse" variant="primary">


      <b-link class="navbar-brand" to="#">
        <span>BootstrapVue</span>
      </b-link>

      <b-nav is-nav-bar>
        <b-nav-item @click="addArticle">Add Article</b-nav-item>
      </b-nav>

      <b-nav is-nav-bar>
        <b-nav-item @click="logOut">Log Out</b-nav-item>
      </b-nav>

    </b-navbar>
  </div>
</template>

<script>
export default{
  data() {
    return {

    }
  },
  methods:{
    logOut:function(){
      window.localStorage.removeItem('token')
      window.location.replace("/")
    },
    addArticle:function(){
      window.location.replace("/#/add-article")
    }
  }
}
</script>

<style scoped>


</style>
