<template>
    <AddCard class="add-card"
      v-on:add-card="addCard"
    />
</template>

<script>
import AddCard from './AddCard'
import gql from 'graphql-tag';

export default {
  name: 'CardAddition',
  components: {
    AddCard,
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
  }
}
</script>

<style scoped>

.add-card {
  display: block;
  align-content: center;
  margin: auto;
}
</style>