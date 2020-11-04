<template>
  <SingleCard class="card"
    v-bind:cards_id="cards_id"
    v-bind:cards_info="cards_info"
    v-bind:current_index="current_index"
    v-on:next-card="nextCard"
  />    
</template>

<script>
import SingleCard from './SingleCard'

export default {
  name: 'DisplayCard',
  components: {
    SingleCard,
  },
  methods: {
    nextCard () {
      if (this.current_index < this.cards_id.length - 1) {
        this.current_index ++;
        console.log(this.current_index);
      } else {
        this.current_index = 0;
      }
    }
  },
  data() {
    return {
      current_index: 0,
      cards_id: ['1', '1001', '1002', '1003'],
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

.card {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
}
</style>