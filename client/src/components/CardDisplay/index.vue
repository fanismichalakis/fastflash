<template>
  <SingleCard class="card"
    v-if="cards_id.length!=0"
    v-bind:cards_id="cards_id.map(e => e.id)"
    v-bind:current_index="current_index"
    v-bind:end_of_the_library="end_of_the_library"
    v-on:next-card="nextCard"
  />
</template>

<script>
import SingleCard from './SingleCard';
import gql from 'graphql-tag';

export default {
  name: 'DisplayCard',
  components: {
    SingleCard,
  },
  methods: {
    nextCard () {
      if (this.current_index < this.cards_id.length - 1) {
        this.current_index ++;
      } else {
        this.end_of_the_library = true;
      }
    }
  },
  apollo: {
    cards_id: {
      query: gql`{
        cards {
          id
        }
      }`,
      update: data => data.cards
    },
  },
  data() {
    return {
      end_of_the_library: false,
      current_index: 0,
      cards_id: []
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