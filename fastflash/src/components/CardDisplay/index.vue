<template>
  <SingleCard
    v-if="$apollo.loading"
    v-bind:cards="cards"
    v-bind:cards_info="cards_info"
    v-bind:current_index="current_index"
    v-on:next-card="nextCard"
  />    
</template>

<script>
import SingleCard from './SingleCard'
import gql from 'graphql-tag'

export default {
  name: 'DisplayCard',
  components: {
    SingleCard,
  },
  apollo: {
    cards: gql`
      {
        cards{
          id
        }
      }
    `
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
      cards_id_fake: ['1000', '1001', '1002', '1003'],
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