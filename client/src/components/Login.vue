<template>
  <div id="arealogin">
    <b-button variant="primary">
          Sign In
    </b-button>

    <router-link to="/signup"><b-button>
          Sign Up
    </b-button></router-link>
    </br></br>
    <b-form-input v-model="username" type="text" placeholder="Enter your username"></b-form-input>

    </br>
    <b-form-input v-model="password" type="password" placeholder="Enter your password"></b-form-input>
    </br>
    <b-button variant="primary">
          Login
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
#arealogin{
  width:50%;
  margin:0 auto;
}

</style>
