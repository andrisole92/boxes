<template>
  <div class="box">
    <box-card></box-card>
    <box-info></box-info>
  </div>
</template>

<script>
  import BoxCard from './box/Box-card.vue'
  import BoxInfo from './box/Box-info.vue'
  export default {
    components: {
      'box-card': BoxCard,
      'box-info': BoxInfo
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 83%;
    min-width: 920px ;
    max-width: 1000px;
    margin: auto;
    /*max-height: 520px;*/
    background-color: white;
    box-shadow: 0 1px 2px 0 #c1c1bd;
    box-shadow: 0 1px 2px 0 rgba(0,0,0);
    border-radius: 0 5px 5px 0;
  }


</style>
