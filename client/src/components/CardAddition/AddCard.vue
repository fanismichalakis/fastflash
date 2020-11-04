<template>
    <div class="add-button" id="add-button" v-on:click="addNewCard">
      <p>+</p>
    </div>
</template>

<script>
//import gql from 'graphql-tag';

export default {
    name: 'AddCard',
    methods: {
      addNewCard: function() {
        this.$emit('add-card');
      }
    }
}
</script>

<style scoped>
.add-button {
  font-size: 30px;
  margin: auto;
  width: 3em;
  border-radius: 10px;
  color: #2c3e50;
  cursor: pointer;
}

.add-button:hover {
  font-weight: bolder;
}

</style>