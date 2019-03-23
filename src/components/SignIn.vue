<template>
<div>
  <h1>Sign In</h1>
  <form class="sign-up">
    <input type="text" v-model="email" placeholder="email" autocomplete="on"><br/>
    <input type="password" v-model="password" placeholder="password" autocomplete="on"><br/>
    <input type="submit" @click="signIn" value="Sign In" class="button">
  </form>
</div>
</template>

<script>
export default {
data() {
  return {
    errors: [],
    email: '',
    password: ''
  }
 },
//Show loading process
computed: {
    loading() {
        return this.$store.getters.loading
    }
},
methods: {
  signIn() {
      const user = {
          email: this.email,
          password: this.password
      }
      this.$store.dispatch('loginUser', user)
        .then(() => {
        this.$router.push('/')
        })
        .catch(err => this.errors.push(err.message))
    }
  },
created() {
  if(this.$route.query['loginError']) {
    this.$store.dispatch('setError', 'Sign in please')
  }
 }
}
</script>