<template>
  <div class="boxes">
    <box></box>
    <div>
      <modal name="hello-world" @opened="showMap" :width="300"
             :height="300">
        <div id="map"></div>
      </modal>
    </div>


  </div>
</template>

<script>
  import Box from './Box.vue'
  export default {
    events: {
      onShowMap () {
        this.$modal.show('hello-world')
      }
    },
    components: {
      'box': Box
    },
    data () {
      return {}
    },
    methods: {
      showMap () {
        setTimeout(function () {
          let uluru = {lat: -25.363, lng: 131.044}
          let mapNode = document.getElementById('map')
// eslint-disable-next-line no-undef
          let map = new google.maps.Map(mapNode, {
            zoom: 4,
            center: uluru
          })
// eslint-disable-next-line no-unused-vars,no-undef
          let marker = new google.maps.Marker({
            position: uluru,
            map: map
          })
        }, 100)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #map {
    height: 300px;
    width: 100%;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
