<template>
  <div>
    <NavBar></NavBar>
    <SideBar></SideBar>
    <MainContent></MainContent>
  </div>
</template>

<script>
import NavBar from './NavBar'
import MainContent from './MainContent'
import SideBar from './SideBar'

export default{
  data() {
    return {
      text: ''
    }
  },
  methods: {

  },
  components:{
    MainContent, SideBar, NavBar
  }
}
</script>

<style scoped>


</style>
