<template>
  <div class="box-desc">
    <h2 id="desc">{{descriptionName}}</h2>
    <div class="location">
      <a v-on:click="showMap"><i class="icon ion-location"></i>{{description.location_details}}</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['descriptionData'],
    methods: {
      showMap () {
        this.$events.$emit('onShowMap', null)
      }
    },
    computed: {
      description () {
        return this.descriptionData
      },
      descriptionName () {
        if (this.description.name !== undefined) {
          if (this.description.name.length > 40) {
            return this.description.name.substr(0, 38) + ' ...'
          } else {
            return this.description.name.substr(0, 38)
          }
        }
      }
    }
  }
</script>

<style>
  .ion-location{
    padding-right: 4px;
    font-size: 12px;
  }

  .box-desc{
    text-align: left;
    margin-left: 8px;
  }
  .box-desc h2{
    font-family: "Verlag A","Verlag B", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 31px;
    line-height: 1.05;
    margin: 16px 0 5px;
    max-height: 70px;
    overflow: hidden;
    padding-bottom: 3px;
    white-space: normal;
    width: 100%;
  }

  .location a{
    color: #b4b4b4;
    cursor: pointer;
    font-size: 13px;
  }
</style>
