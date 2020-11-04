<template>
    <div class="card" id="card-details" v-on:click="revealOrNext">

      <p>{{cards_id}}</p>
      <p class="recto"><strong>{{ card.recto }}</strong></p>
      <p class="verso" v-if="answer_revealed"><em>{{card.verso }}</em></p>

    </div>    
</template>

<script>
import gql from 'graphql-tag';

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
  apollo: {
    // Simple query that will update the 'hello' vue property
    cards: gql`{
      cards {
        id
      }
    }`,
    card:{
      // gql query
      query: gql`query card($id: Int!) {
                  card(id: $id){
                    recto
                    verso
                  }
    }`,
      // Static parameters
      variables: {
        id: 1,
      },
  }},
  props: {
    current_index: Number,
    cards_id: Array,
    cards_info: Object
  },
  data () {
    console.log(this.cards_id);
    return {
      answer_revealed: false,
      cards: [],
      card: {},
    }
  }
}

</script>

<style scoped>
.card {
  font-size: 30px;
  padding: 1em;
  margin: 1em;
  width: 12em;
  height: 12em;
  border-radius: 10px;
  color: #2c3e50;
  border-style: solid;
}
.recto{
  font-family: 'Alfa Slab One', cursive;
}
.verso{
  font-family: 'Lato', sans-serif;
}

.card:hover {
  background-color: rgb(44, 62, 80, 0.1);
  transform: rotate3d(-1, 2, 0, 20deg);
}
</style>