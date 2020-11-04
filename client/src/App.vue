<template>
  <div>
    <CardAddition />
    <CardDisplay />
  </div>
</template>

<script>

import CardDisplay from './components/CardDisplay'
import CardAddition from './components/CardAddition'

export default {
  name: 'App',
  metaInfo: {
      title: 'FastFlash',
      titleTemplate: null
    },
  components: {
    CardDisplay,
    CardAddition
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
