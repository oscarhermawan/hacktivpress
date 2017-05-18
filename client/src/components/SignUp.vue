<template>
  <div id="areasignup">
    <router-link to="/login"><b-button>
          Sign In
    </b-button></router-link>

    <b-button variant="primary">
          Sign Up
    </b-button>
  </br> </br>
    <b-form-input v-model="username" type="text" placeholder="Enter your Username"></b-form-input>

    </br>
    <b-form-input v-model="password" type="password" placeholder="Enter your Password"></b-form-input>
    </br>
    <b-form-input v-model="name" type="text" placeholder="Enter your Name"></b-form-input>
    </br>
    <b-button variant="primary">
          Sign Up
    </b-button>
  </div>
</template>

<script>
export default{
  data() {
    return {
      text: ''
    }
  }
}
</script>

<style scoped>
#areasignup{
  width:50%;
  margin:0 auto;
}

</style>
