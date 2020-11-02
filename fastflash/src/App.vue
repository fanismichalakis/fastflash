<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Card card="Une carte" />
</template>

<script>
import Card from './components/Card'

export default {
  name: 'App',
  components: {
    Card
  },
  data() {
    return {
      cards_id: [1000, 1001, 1002, 1003],
      cards_info: {
        1000: {
          recto:'manger',
          verso:'eat',
          recto_def:'français',
          verso_def:'anglais',
          position:1,
          library:'franglais',
          id:1000
        },
        1001: {
          recto:'bouger',
          verso:'move',
          recto_def:'français',
          verso_def:'anglais',
          position:1,
          library:'franglais',
          id:1001
        },
        1002: {
          recto:'chien',
          verso:'dog',
          recto_def:'français',
          verso_def:'anglais',
          position:1,
          library:'franglais',
          id:1002
        },
        1003: {
          recto:'jaune',
          verso:'yellow',
          recto_def:'français',
          verso_def:'anglais',
          position:1,
          library:'franglais',
          id:1003
        }
      },
    };
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
