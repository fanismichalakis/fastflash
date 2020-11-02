<template>
    <SingleCard v-bind:current_id="current_id" v-bind:cards_info="cards_info" />    
</template>

<script>
import SingleCard from './SingleCard'

export default {
  name: 'DisplayCard',
  components: {
    SingleCard,
  },
  data() {
    return {
      current_id: '1000',
      cards_id: ['1000', '1001', '1002', '1003'],
      cards_info: {
        '1000': {
          recto:'manger',
          verso:'eat',
          recto_def:'français',
          verso_def:'anglais',
          position:1,
          library:'franglais',
          id:1000
        },
        '1001': {
          recto:'bouger',
          verso:'move',
          recto_def:'français',
          verso_def:'anglais',
          position:1,
          library:'franglais',
          id:1001
        },
        '1002': {
          recto:'chien',
          verso:'dog',
          recto_def:'français',
          verso_def:'anglais',
          position:1,
          library:'franglais',
          id:1002
        },
        '1003': {
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

<style scoped>

</style>