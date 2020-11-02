<template>
    <div class="card">
        {{ card }}
    </div>    
</template>

<script>
export default {
    name: 'Card',
    props: {
        card: String
    }
}
</script>

<style scoped>
.card {
  padding: 5px;
  margin: 5px;
  width: 12em;
  height: 12em;
  border-radius: 10px;
  color: #2c3e50;
  border-style: solid;
}

.card:hover {
  background-color: rgb(44, 62, 80, 0.1);
}
</style>