<template>
<div>
 <div class="container">
      <div v-for="i in num" :key="i" class="item">

          {{i}}
      </div>

  </div>
</div>
 
</template>

<script>
export default {
  data() {
    return {
        num:14
    }
  },
  created() {

  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped>
.container{
    padding: 10px;
    box-sizing: border-box;
    border-color:dimgray;
    border: 1px rgb(194, 63, 128) solid;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(4, 25%);
    grid-auto-flow: row;
    grid-row-gap: 5px;
    grid-column-gap: 5px;
    justify-content:center;
    justify-items: center;
    align-items: center;
    align-content: center;
    margin: 0 auto;
}
.item{
    height: 30px;
    width: 30px;
    background: rgb(194, 63, 128);
}
</style>
