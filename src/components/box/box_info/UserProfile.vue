<template>
  <div>
    <div class="image">
      <a href="#">
        <img class="avatar" :src="avatar"/>
      </a>
    </div>
    <div class="text">
      <div class="">
        <div class="credentials">
          <a class="name" href="#">{{userData.name}}</a>
          <a class="username" href="#">{{userData.nickname}}</a>
        </div>
        <div class="follow-link"><a>Follow</a></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['userData', 'avatar'],
    computed: {
      user () {
        return this.userData.user
      }
    }
  }
</script>

<style scoped>

  .follow-link{
    position: absolute;
    right: 16px;
    top: 5px;

  }

  .follow-link a:hover{
    border: none;
    color: #fff;
    text-decoration: none;
  }

  .follow-link a{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    background-color: #f5f5f5;
    border: 1px solid #e6e6e6;
    color: #8b8a8a;
    display: inline-block;
    font-weight: 600;
    height: 32px;
    margin-top: 21px;
    outline: none;
    padding: 6px 13px;
    position: relative;
    vertical-align: top;
    background-color: #474746;
    border: 1px solid #353534;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    border: none;
    font-weight: 500;
    margin-top: 0;
    font-size: 13px;
    height: 28px;
    padding: 4px 17px;
    font-size: 13px;
    height: 28px;
    line-height: 1.2;
    padding: 6px 17px 0;
    position: absolute;
    right: -8px;
    top: 3px;
  }
  a.name{
    color: #3599e6;
    text-decoration: none;
    font-size: 12px;
    font-weight: bold;
  }

  a.username{
    color: #474746;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 2px;
  }

  .credentials{
    text-align: left;
    /*display: flex;*/
    /*flex-direction: column;*/
    display: inline-block;
    position: relative;
    top: 10px;
  }
  .credentials a{
    display: block;
  }

  .text{
    text-align: left;
    color: #646464;
    margin-top: 13px;
    /*max-width: 342px;*/
    padding-left: 50px;
    position: relative;
  }
  .image{
    margin-top: 13px;
    position: absolute;
    vertical-align: top;
    z-index: 10;
  }
  .avatar{
    -webkit-border-radius: 3px;
    border-radius: 3px;
    height: 37px;
    width: 37px;
    margin-left: 8px;
  }
</style>
