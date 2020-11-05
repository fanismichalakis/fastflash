<template>
    <AddCard class="add-card" />
</template>

<script>
import AddCard from './AddCard'

export default {
  name: 'CardAddition',
  components: {
    AddCard,
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