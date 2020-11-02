<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <DisplayCard />
  </div>
</template>

<script>
import DisplayCard from './components/CardDisplay'

export default {
  name: 'App',
  components: {
    DisplayCard,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px 25% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5em;
}
</style>
