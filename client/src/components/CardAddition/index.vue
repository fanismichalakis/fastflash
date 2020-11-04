<template>
    <AddCard class="add-card"
      v-on:add-card="addCard"
    />
</template>

<script>
import AddCard from './AddCard'

export default {
  name: 'CardAddition',
  components: {
    AddCard,
  },
  methods: {
    addCard() {
      console.log("adding new card")
    }
  }
}
</script>

<style scoped>

.add-card {
  display: block;
  padding-left: 90%;
}
</style>