<template>
  <div>
    <CardDisplay />
  </div>
</template>

<script>

import CardDisplay from './components/CardDisplay'

export default {
  name: 'App',
  components: {
    CardDisplay,
  },
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
