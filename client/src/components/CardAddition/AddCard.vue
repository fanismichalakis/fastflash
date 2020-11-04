<template>
    <div class="add-card">
      <input v-model="cardEnglish" class="new-card-field" placeholder="A word in english" />
      <input v-model="cardFrench" class="new-card-field" placeholder="A word in french" />
      <div class="new-card-button" id="new-card-button" v-on:click="addNewCard">
        <p>+</p>
      </div>
    <p>{{ this.cards_id }}</p>
    </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
    name: 'AddCard',
    methods: {


      async addNewCard() {
        console.log(this.cardEnglish)
        console.log(this.cardFrench)
        const IDS = this.cards_id.map(e => e.id)
        console.log(IDS)
        const idMax = Math.max.apply(null, IDS)
        console.log(idMax)

        
        const result =  await this.$apollo.mutate({
          mutation: gql`mutation ($id: Int!, $library: String!, $recto_def: String!, $verso_def: String!, $recto: String!, $verso: String!, $position: Boolean! ) {
                          addCard(id: $id,
                                  library: $library,
                                  recto_def: $recto_def,
                                  verso_def: $verso_def,
                                  recto: $recto,
                                  verso: $verso
                                  position: $position) {
                            id
                            position
                            recto
                            verso
                          }
                        }`,
          variables: {
            position: true,
            id:idMax + 1,
            recto_def:"english",
            verso_def:"french",
            recto:this.cardEnglish,
            verso:this.cardFrench,
            library:"french/english"
          },
        });

        console.log(result)
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
        cards_id: [],
        cardEnglish: "",
        cardFrench: ""
      }
    }
}
</script>

<style scoped>
.add-card {
  display: block;
  font-size: 30px;
  margin: auto;
  width: 3em;
  border-radius: 10px;
  color: #2c3e50;
  cursor: pointer;
}

.add-card:hover {
  font-weight: bolder;
}

.new-card-field {
  border-radius: 5px;
  border: solid;
  border-color: azure;
}

.new-card-button {
  margin: auto;
  width: 3em;
}  

.new-card-button:hover {
  font-weight: bolder
}

</style>