<template>
  <div class="box-card">
    <slider :photos="photos" :price="price"></slider>
  </div>
</template>

<script>
  import axios from 'axios'
  import {Carousel, Slide} from 'vue-carousel'
import Slider from './box_card/Slider.vue'
export default {
    components: {
      Carousel,
      Slide,
      Slider
    },
    beforeMount () {
      axios.get('https://api.box.es/api/users/47776/items/278878.json').then(function (response) {
        let oItem = response.data.item
        this.photos = oItem.item_photos
        this.price = oItem.price
      }.bind(this)).catch(function (error) {
        console.log(error)
      })
    },
    data () {
      return {
        photos: [],
        price: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .buy-btn a {
    margin-bottom: 13px;
  }

  .price-tag {
    margin-top: 12px;
    background-color: rgba(60, 60, 59, 0.9);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#E63C3C3B, endColorstr=#E63C3C3B);
    color: #fff;
    display: block;
    padding: 0 10px 0 8px;
  }

  .price {
    margin-bottom: 0;
    font-size: 32px;
    font-weight: 600;
    letter-spacing: -0.04em;
  }

  .carusel {
    position: relative;
  }

  .box-card {
    width: 60%;
    display: inline-block;
    float: left;
  }

  .box-image {
    max-width: 100%;
  }

  .labels {
    position: absolute;
    z-index: 1000;
    /*height: 0;*/
    /*margin: 0;*/
    /*top: 21px;*/
    right: 0;
    /*float: right;*/
    /*margin-right: 24px;*/
    /*color: white;*/
    /*font-weight: bold;*/
  }

  .labels div {
    display: inline-block;
    margin-left: 12px;
  }

</style>
