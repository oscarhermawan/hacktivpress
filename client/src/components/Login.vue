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
    <b-button variant="primary" @click="onLogin">
          Login
    </b-button>
  </div>
</template>

<script>
import axios from 'axios'
export default{
  data() {
    return {
      text: ''
    }
  },
  methods:{
    onLogin:function(){
      axios.post('http://localhost:3000/users/signin',{
        username:this.username,
        password:this.password
      })
      .then((result)=>{
        if(result.data.token == null){
          console.log(result.data.message);
        }
        else {
          console.log(result.data);
          localStorage.setItem('token', result.data.token)
          window.location.href = "/"
        }
      })
      .catch((err)=>{
        console.log(err);
      })
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
