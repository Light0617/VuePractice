<template>
  <div>
    <h1>Author</h1>
    <button @click='count++'>+++ </button>
    <h1> {{ count }} </h1>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      count : 0
    }
  }
}
//styling in child applied, not parent
</script>

<style scoped>
  div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
  }
  h1 {
    color:blueviolet;
  }
</style>

