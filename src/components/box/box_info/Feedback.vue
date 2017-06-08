<template>
  <div class="feedback-container">
    <div class="add-comment">
      <input type="text" placeholder="Add a comment"/>
    </div>
    <div class="feedback">
      <div class="feedback-icon">
        <div>
          <i class="icon ion-ios-heart"></i>
        </div>
        <div>
          <p class="icon-text likes-count">{{feedbackData.likes_count}}</p>
        </div>
      </div>
      <div class="feedback-icon">
        <div>
          <i class="icon ion-ios-star"></i>
        </div>
        <div>
          <p class="icon-text reposts-count">{{feedbackData.reposts_count}}</p>
        </div>
      </div>
      <div class="feedback-icon">
        <div>
          <i class="icon ion-arrow-swap"></i>
        </div>
        <div>
          <p class="icon-text wants-count">{{feedbackData.wants_count}}</p>
        </div>
      </div>
  </div>

  </div>
</template>

<script>
  export default {
    props: ['feedbackData'],
    computed: {
      feedback () {
        return this.feedbackData
      }
    }
  }
</script>

<style scoped>
  .feedback-container{
    position: absolute;
    width: 100%;
    bottom:0;
  }
  .icon-text{
    margin-bottom: 0;
  }
  .feedback {
    color:#ccc;
    /*margin-top: -5px;*/
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .feedback-icon{
    width:33%;
  }

  .feedback-icon:hover{
    background-color: rgba(75,75,75,0.05);
    cursor: pointer;
  }

  .feedback-icon div{
    /*height: 40px;*/
  }
  i{
    font-size: 32px;
  }
  .add-comment{
    border-bottom: 1px solid #e3e3e3;
    border-top: 1px solid #e3e3e3;
    padding: 9px 10px;
    width: 100%;
    text-align: left;
  }

  .add-comment input{
    background-color: #f2f2f2;
    border-color: #dfdfdf;
    height: 36px;
    -webkit-background-clip: padding;
    background-clip: padding-box;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    text-shadow: none;
    background-color: #fbfbfa;
    border-color: #dadada;
    border-style: solid;
    border-width: 1px;
    color: #474746;
    font-size: 12px;
    font-weight: 400;
    height: 30px;
    padding: 0 9px;
    width: 100%;
  }
</style>
