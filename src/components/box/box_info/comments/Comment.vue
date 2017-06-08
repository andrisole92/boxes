<template>
  <div class="comment-box">
    <div class="image">
      <a class="link-img" href="#">
        <img class="avatar" :src="commentData.user.avatar.small_url"/>
      </a>
    </div>
    <div class="text">
      <a class="username" href="#">{{commentData.user.name}}</a>
      <p class="comment-text">{{commentData.comment}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['commentData']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .text{
    color: #646464;
    padding-left: 12px;
  }
  .comment-text{
    color: #646464;
    font-size: 10px;
    margin-bottom: 4px;

  }
  .username{
    color: #474746;
    font-size: 12px;
    font-weight: bold;  }
  .avatar{
    border-radius: 3px;
    height: 37px;
    width: 37px;
  }
  .comment-box{
    display: flex;
    flex-direction: row;
    text-align: left;
  }
</style>
