<template>
<div>
  <h1>Sign Up</h1>
  <form class="sign-up">
    <input type="text" v-model="email" placeholder="email"><br/>
    <input type="text" v-model="password" placeholder="password"><br/>
    <input type="submit" @click="signUp" value="send" class="button">
  </form>
</div>
</template>

<script>
export default {
data() {
  return {
    email: '',
    password: ''
  }
 },
methods: {
  signUp() {
    const user = {
      email: this.email,
      password: this.password
    }
    this.$store.dispatch('registerUser', user)
  }
 }
}
</script>
<style lang="scss">
.sign-up {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
 & input {
    background: transparent;
    width: 15rem;
    padding: 15px;
    box-sizing: border-box;
    border: 1px solid #2c3e50;
    margin-bottom: 1rem;
    border-radius: 0;
    text-transform: uppercase;
  }
}
.button {
    text-decoration: none;
    color: #2c3e50;
    box-sizing: border-box;
    border: 1px solid #2c3e50;
    max-width: 5rem;
}
</style>
