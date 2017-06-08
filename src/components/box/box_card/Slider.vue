<template>
  <div class="carusel">
    <div class="labels">
      <div class="buy-btn">
        <a class="btn btn-success" href="#">
          <i class="icon ion-bag"></i>Buy</a>
      </div>
      <div class="price-tag">
        <p class="price">${{price}}</p>
      </div>
    </div>
    <carousel :per-page="1">
      <template v-for="photo in photos">
        <slide>
          <div class="box-img">
            <img class="box-image" :src="photo.large">
          </div>
        </slide>
      </template>
    </carousel>
  </div>
</template>

<script>
  import {Carousel, Slide} from 'vue-carousel'
export default {
    components: {
      Carousel,
      Slide
    },
    props: ['photos', 'price']
  }
</script>

<style>

  .VueCarousel-pagination{
    position: absolute;
    z-index: 1000;
    bottom: 24px;
    width: 100%;
    float: left;
    text-align: center;
  }

  .ion-bag{
    padding-right: 8px;
  }

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
