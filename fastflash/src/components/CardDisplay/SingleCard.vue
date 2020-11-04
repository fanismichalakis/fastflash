<template>
    <div class="card" id="card-details" v-on:click="revealOrNext">
      <p><strong>{{ cards_info[cards_id[current_index]].recto }}</strong></p>
      <p v-if="answer_revealed"><em>{{ cards_info[cards_id[current_index]].verso }}</em></p>
    </div>    
</template>

<script>
export default {
  name: 'SingleCard',
  methods: {
    revealOrNext: function () {
      if (this.answer_revealed) {
        this.$emit('next-card', this.current_index);
        this.answer_revealed = false;
      } else {
        this.answer_revealed = true;
      }
    }
  },
  props: {
    current_index: Number,
    cards_id: Array,
    cards_info: Object
  },
  data () {
    return {
      answer_revealed: false,
    }
  }
}
</script>

<style scoped>
.card {
  padding: 1em;
  margin: 1em;
  width: 12em;
  height: 12em;
  border-radius: 10px;
  color: #2c3e50;
  border-style: solid;
}

.card:hover {
  background-color: rgb(44, 62, 80, 0.1);
  transform: rotate3d(-1, 2, 0, 20deg);
}
</style>