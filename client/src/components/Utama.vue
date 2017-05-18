<template>
  <div>
    <NavBar></NavBar>
    </br>
    <MainContent></MainContent>
  </div>
</template>

<script>
import NavBar from './NavBar'
import MainContent from './MainContent'
import SideBar from './SideBar'
import { mapGetters } from 'vuex'

export default{
  data() {
    return {
      text: ''
    }
  },
  methods: {

  },
  mounted() {
    this.$store.dispatch('LOAD_ARTICLES_LIST')
  },
  components:{
    MainContent, SideBar, NavBar
  }
}
</script>

<style scoped>


</style>
