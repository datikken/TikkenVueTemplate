<template>
  <div id="app">
    <div class="navbar">
      <div id="nav" v-for="link in links" :key="link.id">
        <router-link :to="link.url">{{link.title}}</router-link>
      </div>
      <a class="logout" @click="onLogout" v-if="isUserLoggedIn">Logout</a>
    </div>
    <router-view/>
     <div class="snackbar" @click="closeError">
      <p>{{error}}</p>
    </div>
  </div>
</template>
<script>

export default {
methods: {
  onLogout() {
    this.$store.dispatch('logoutUser')
    this.$router.push('/')      
  },
  closeError() {
    this.$store.dispatch('clearError')
  }
},
computed: {
error() {
  return this.$store.getters.error
},
isUserLoggedIn() {
  return this.$store.getters.isUserLoggedIn
  },
links() {
  if(this.isUserLoggedIn) {
    return [
      {title: 'Home', url: '/'},
      {title: 'About', url: '/about'}
    ]
  } else {
    return [
      {title: 'Home', url: '/'},
      {title: 'Sign In', url: '/sign_in'},
      {title: 'Sign Up', url: '/sign_up'}
    ]
   }
  }
 }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Stem';
  src: url('./assets/Stem Text W03 Regular.ttf');
}
 
#app {
  font-family: 'Stem';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  margin: 1rem 1rem;
  min-width: 4.5rem;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.navbar {
  display: flex;
  align-items: center;
}

.logout {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    margin-left: 2rem;
    cursor: pointer;
}

.snackbar {
  height: 2rem;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e0115f;
  cursor: pointer;
}
</style>
