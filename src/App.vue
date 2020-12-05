<template>
  <div id="app">
    <div class="nav">
      <Nav />
    </div>
    <div class="main">
      <router-view :key="$router.path" ></router-view>
    </div>
  </div>
</template>

<script>

import TheNav from '@/components/TheNav.vue'

export default {
  components : {
    Nav : TheNav
  },
  created(){
    this.$store.dispatch('fetchPosts')
  }
}
</script>


<style>

body{
  margin: 0px;
}

*{
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;

  display: flex;  

}

.nav{
  min-width: 120px;
  display: flex;
  align-items: center;
}

.main{
  flex: 1;
  display: flex;
  flex-direction: column;
}

#nav {
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-around;
}

a{
  text-decoration: none;
  color: inherit;
  display: block;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.router-link-exact-active h3 {
  color: indianred;
}

</style>
