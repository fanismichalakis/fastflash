<template>
<div>
<p>
  <router-link to="/add-card">Add a card</router-link>
  <router-link to="/">See the library</router-link>
</p>
<div>
  <router-view></router-view>
</div>
</div>
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    title: 'FastFlash',
    titleTemplate: null
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
}
</style>
